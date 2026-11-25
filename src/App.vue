<script setup>
import { RouterLink, RouterView } from 'vue-router';

import AppHeader from './components/Cabecalho.vue';
import AppFooter from './components/Rodape.vue';
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-light">
    <AppHeader titulo="Reserva Fácil" />

    <nav class="bg-white border-bottom" aria-label="Menu principal">
      <div class="container d-flex flex-wrap gap-2 py-3">
        <RouterLink
          to="/hoteis"
          class="btn btn-outline-success"
          exact-active-class="active"
        >
          Hotéis
        </RouterLink>

        <RouterLink
          to="/"
          class="btn btn-outline-success"
          exact-active-class="active"
        >
          Início
        </RouterLink>

        <RouterLink
          to="/sobre"
          class="btn btn-outline-success"
          exact-active-class="active"
        >
          Sobre
        </RouterLink>

        <RouterLink
          to="/consultar-cep"
          class="btn btn-outline-success"
          exact-active-class="active"
        >
          Consultar CEP
        </RouterLink>
      </div>
    </nav>

    <main class="container flex-grow-1 py-4">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>
