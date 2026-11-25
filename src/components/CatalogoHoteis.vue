<script setup>
defineProps({
  hotel: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['confirmar']);

const formatoMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
</script>

<template>
  <div class="card border-success shadow-sm">
    <div class="card-body p-4">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-md-8">
          <h3 class="h5 text-success mb-3">
            Confira a hospedagem selecionada
          </h3>

          <dl class="row mb-0">
            <dt class="col-sm-4">Hotel</dt>
            <dd class="col-sm-8">{{ hotel.nome }}</dd>

            <dt class="col-sm-4">Cidade</dt>
            <dd class="col-sm-8">{{ hotel.cidade }}</dd>

            <dt class="col-sm-4">Valor da diária</dt>
            <dd class="col-sm-8 mb-0">
              {{ formatoMoeda.format(hotel.preco) }}
            </dd>
          </dl>
        </div>

        <div class="col-12 col-md-4">
          <div class="bg-success-subtle rounded-3 p-3 text-center">
            <p class="small text-body-secondary mb-1">
              Preço por diária
            </p>

            <p class="fs-3 fw-bold text-success mb-3">
              {{ formatoMoeda.format(hotel.preco) }}
            </p>

            <button
              type="button"
              class="btn btn-success w-100"
              :aria-label="`Confirmar simulação de reserva no ${hotel.nome}`"
              @click="emit('confirmar')"
            >
              Confirmar simulação
            </button>
          </div>
        </div>
      </div>

      <p class="small text-body-secondary border-top pt-3 mt-4 mb-0">
        Esta é uma demonstração acadêmica. Nenhuma reserva real
        ou cobrança será realizada.
      </p>
    </div>
  </div>
</template>