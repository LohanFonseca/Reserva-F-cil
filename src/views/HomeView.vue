<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section
    class="bg-white rounded-3 shadow-sm p-4 p-md-5 text-center"
    aria-labelledby="titulo-inicio"
  >
    <span class="badge text-bg-success mb-3">
      Hospedagens no Pará
    </span>

    <h1 id="titulo-inicio" class="display-5 fw-bold text-success mb-3">
      Sua próxima viagem começa aqui
    </h1>

    <p class="lead text-body-secondary mb-4">
      Encontre hotéis, compare os preços das diárias e simule
      sua reserva com facilidade.
    </p>

    <RouterLink to="/hoteis" class="btn btn-success btn-lg">
      Explorar hotéis
    </RouterLink>
  </section>

  <section class="mt-5" aria-labelledby="titulo-etapas">
    <h2 id="titulo-etapas" class="h4 text-center mb-4">
      Como funciona?
    </h2>

    <div class="row g-4">
      <div class="col-12 col-md-4">
        <article class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <span class="badge text-bg-success mb-3">1</span>
            <h3 class="h5">Pesquise</h3>
            <p class="text-body-secondary mb-0">
              Informe a cidade e o preço máximo por diária.
            </p>
          </div>
        </article>
      </div>

      <div class="col-12 col-md-4">
        <article class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <span class="badge text-bg-success mb-3">2</span>
            <h3 class="h5">Escolha</h3>
            <p class="text-body-secondary mb-0">
              Compare as opções e selecione uma hospedagem.
            </p>
          </div>
        </article>
      </div>

      <div class="col-12 col-md-4">
        <article class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <span class="badge text-bg-success mb-3">3</span>
            <h3 class="h5">Simule sua reserva</h3>
            <p class="text-body-secondary mb-0">
              Confira os dados e confirme a simulação.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>