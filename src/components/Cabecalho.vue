<script setup>
defineProps({
  titulo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="bg-success text-white shadow-sm">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 py-3 py-md-4 text-center text-md-start"
    >
      <div>
        <p class="fs-3 fw-bold mb-1">
          <span aria-hidden="true"></span>
          {{ titulo }}
        </p>

        <p class="small mb-0">Encontre um hotel para a sua próxima viagem.</p>
      </div>

      <span class="badge bg-white text-success rounded-pill px-3 py-2">
        Hospedagens no Pará
      </span>
    </div>
  </header>
</template>
