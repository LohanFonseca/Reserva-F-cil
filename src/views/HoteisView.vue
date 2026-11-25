<script setup>
import { computed, ref } from 'vue';

import SearchFilter from '../components/HotelFiltro.vue';
import HotelCard from '../components/HotelCard.vue';
import BookingSummary from '../components/CatalogoHoteis.vue';

const hoteis = [
  { id: 1, nome: 'Hotel Central', cidade: 'Belém', preco: 180 },
  { id: 2, nome: 'Hotel Paraíso', cidade: 'Salinópolis', preco: 250 },
  { id: 3, nome: 'Hotel Praia', cidade: 'Belém', preco: 220 },
  { id: 4, nome: 'Hotel Amazônia', cidade: 'Santarém', preco: 200 },
];

const hoteisFiltrados = ref([...hoteis]);

const ordenacao = ref('padrao');

const hoteisOrdenados = computed(() => {
  const lista = [...hoteisFiltrados.value];

  if (ordenacao.value === 'menor-preco') {
    lista.sort((a, b) => a.preco - b.preco);
  } else if (ordenacao.value === 'maior-preco') {
    lista.sort((a, b) => b.preco - a.preco);
  }

  return lista;
});

const hotelSelecionado = ref(null);
const mensagem = ref('');
const erro = ref('');

function normalizar(texto) {
  return String(texto ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function buscar(filtros) {
  erro.value = '';

  const precoInformado = String(filtros.precoMaximo ?? '').trim();
  const limite = Number(precoInformado);

  if (precoInformado !== '' && (!Number.isFinite(limite) || limite < 0)) {
    erro.value = 'Informe um preço máximo válido.';
    return;
  }

  hotelSelecionado.value = null;
  mensagem.value = '';

  hoteisFiltrados.value = hoteis.filter((hotel) => {
    const mesmaCidade = normalizar(hotel.cidade).includes(
      normalizar(filtros.cidade)
    );

    const dentroDoPreco = precoInformado === '' || hotel.preco <= limite;

    return mesmaCidade && dentroDoPreco;
  });
}

function selecionarHotel(hotel) {
  hotelSelecionado.value = hotel;
  mensagem.value = '';
}

function confirmarReserva() {
  if (!hotelSelecionado.value) return;

  mensagem.value =
    `Simulação de reserva no ${hotelSelecionado.value.nome} ` +
    'concluída com sucesso!';

  hotelSelecionado.value = null;
}
</script>

<template>
  <div>
      <section class="text-center mb-4">
        <h1 class="text-success">Encontre sua próxima hospedagem</h1>

        <p class="lead text-body-secondary">
          Pesquise hotéis por cidade e preço.
        </p>
      </section>

      <section class="card border-0 shadow-sm mb-4">
        <div class="card-body p-4">
          <h2 class="h5 mb-3">Buscar hotéis</h2>

          <SearchFilter @buscar="buscar" />

          <div v-if="erro" class="alert alert-danger mt-3 mb-0" role="alert">
            {{ erro }}
          </div>
        </div>
      </section>

      <section>
      <div class="row mb-3">
      <div class="col-12 col-md-5 col-lg-4">
        <label for="ordenacao" class="form-label">
          Ordenar hotéis
        </label>
    
        <select
          id="ordenacao"
          v-model="ordenacao"
          class="form-select"
        >
          <option value="padrao">Ordem original</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
        </select>
      </div>
    </div>
        
        <h2 class="h4 text-success">Hotéis disponíveis</h2>

        <p class="text-body-secondary" role="status">
          {{ hoteisFiltrados.length }} hospedagens encontradas
        </p>

        <div
          v-if="hoteisFiltrados.length"
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4"
        >
          <div v-for="hotel in hoteisOrdenados" :key="hotel.id" class="col">
            <HotelCard :hotel="hotel" @selecionar="selecionarHotel" />
          </div>
        </div>

        <div v-else class="alert alert-info">
          Nenhum hotel encontrado. Tente outra cidade ou aumente o preço máximo.
        </div>
      </section>

      <section v-if="hotelSelecionado" class="mt-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="h4 text-success mb-0">Resumo da reserva</h2>

          <button
            type="button"
            class="btn btn-outline-secondary btn-sm"
            @click="hotelSelecionado = null"
          >
            Cancelar seleção
          </button>
        </div>

        <BookingSummary
          :hotel="hotelSelecionado"
          @confirmar="confirmarReserva"
        />
      </section>

      <div v-if="mensagem" class="alert alert-success mt-4" role="status">
        {{ mensagem }}
      </div>
  </div>
</template>
