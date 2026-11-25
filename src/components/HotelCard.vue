<script setup>
defineProps({
  hotel: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['selecionar']);

const formatoMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
</script>

<template>
  <article class="card h-100 border-0 shadow-sm">
    <div class="card-body d-flex flex-column p-4">
      <div class="display-5 mb-3" aria-hidden="true">
        🏨
      </div>

      <h3 class="card-title h5 text-success">
        {{ hotel.nome }}
      </h3>

      <p class="card-text text-body-secondary mb-4">
        <span aria-hidden="true">📍</span>
        <span class="visually-hidden">Cidade:</span>
        {{ hotel.cidade }}
      </p>

      <div class="mt-auto">
        <p class="mb-3">
          <span class="fs-4 fw-bold text-success">
            {{ formatoMoeda.format(hotel.preco) }}
          </span>

          <span class="d-block small text-body-secondary">
            por diária
          </span>
        </p>

        <button
          type="button"
          class="btn btn-success w-100"
          :aria-label="`Selecionar ${hotel.nome} para reservar`"
          @click="emit('selecionar', hotel)"
        >
          Selecionar hotel
        </button>
      </div>
    </div>
  </article>
</template>