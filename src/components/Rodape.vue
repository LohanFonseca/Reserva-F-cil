<script setup>
const anoAtual = new Date().getFullYear();
</script>

<template>
  <footer class="bg-dark text-white py-4 mt-auto">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start"
    >
      <div>
        <p class="fw-bold fs-5 mb-1">Reserva Fácil</p>
        <p class="small text-white-50 mb-0">
          Encontre sua próxima hospedagem no Pará.
        </p>
      </div>

      <div>
        <p class="small mb-1">
          Projeto acadêmico desenvolvido com Vue.js e Bootstrap.
        </p>
        <p class="small text-white-50 mb-0">
          {{ anoAtual }} · Reservas apenas para demonstração.
        </p>
      </div>
    </div>
  </footer>
</template>
