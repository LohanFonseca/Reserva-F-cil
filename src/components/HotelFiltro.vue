<script setup>
import { ref } from 'vue';

const cidade = ref('');
const precoMaximo = ref('');

const emit = defineEmits(['buscar']);

function realizarBusca() {
  emit('buscar', {
    cidade: cidade.value.trim(),
    precoMaximo:
      precoMaximo.value === '' ? '' : Number(precoMaximo.value),
  });
}

function limparBusca() {
  cidade.value = '';
  precoMaximo.value = '';

  emit('buscar', {
    cidade: '',
    precoMaximo: '',
  });
}
</script>

<template>
  <form @submit.prevent="realizarBusca">
    <div class="row g-3 align-items-end">
      <div class="col-12 col-md-5">
        <label for="cidade" class="form-label">
          Cidade
        </label>

        <input
          id="cidade"
          v-model="cidade"
          name="cidade"
          class="form-control"
          type="text"
          placeholder="Ex.: Belém"
          autocomplete="address-level2"
          aria-describedby="cidade-ajuda"
        />

        <div id="cidade-ajuda" class="form-text">
          Deixe vazio para pesquisar em todas as cidades.
        </div>
      </div>

      <div class="col-12 col-md-4">
        <label for="preco" class="form-label">
          Preço máximo por diária
        </label>

        <div class="input-group">
          <span class="input-group-text">R$</span>

          <input
            id="preco"
            v-model="precoMaximo"
            name="precoMaximo"
            class="form-control"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ex.: 250"
            aria-describedby="preco-ajuda"
          />
        </div>

        <div id="preco-ajuda" class="form-text">
          Deixe vazio para pesquisar sem limite de preço.
        </div>
      </div>

      <div class="col-12 col-md-3">
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-success">
            Buscar hotéis
          </button>

          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="limparBusca"
          >
            Limpar campos
          </button>
        </div>
      </div>
    </div>
  </form>
</template>