<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="text-center bg-white rounded-3 shadow-sm p-5">
    <p class="display-1 fw-bold text-success mb-2">404</p>

    <h1 class="h3">Página não encontrada</h1>

    <p class="text-body-secondary my-3">
      O endereço acessado não corresponde a uma página do Reserva Fácil.
    </p>

    <RouterLink to="/" class="btn btn-success">
      Voltar ao início
    </RouterLink>
  </section>
</template>