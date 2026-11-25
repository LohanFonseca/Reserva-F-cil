<script setup>
import { RouterLink } from 'vue-router';

const tecnologias = [
  {
    nome: 'Vue.js',
    descricao: 'Componentes reutilizáveis, reatividade, props e eventos.',
  },
  {
    nome: 'Bootstrap',
    descricao:
      'Estilos, formulários, cards e organização responsiva das páginas.',
  },
  {
    nome: 'Vue Router',
    descricao: 'Navegação entre páginas sem recarregar a aplicação inteira.',
  },
  {
    nome: 'Axios',
    descricao: 'Requisições HTTP para consultar o serviço de endereços.',
  },
  {
    nome: 'ViaCEP',
    descricao:
      'API externa que fornece endereços brasileiros a partir de um CEP.',
  },
];

const funcionalidades = [
  'Pesquisar hotéis por cidade e preço máximo.',
  'Ordenar hospedagens pelo preço da diária.',
  'Selecionar um hotel e simular uma reserva.',
  'Consultar endereços pelo CEP.',
  'Navegar entre páginas e tratar endereços inexistentes.',
];
</script>

<template>
  <section aria-labelledby="titulo-sobre">
    <h1 id="titulo-sobre" class="text-success mb-3">Sobre o Reserva Fácil</h1>

    <p class="lead text-body-secondary">
      Projeto acadêmico desenvolvido para praticar a construção de uma aplicação
      de hospedagens com Vue.js.
    </p>

    <div class="row g-4 mt-1">
      <div class="col-12 col-lg-6">
        <article class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <h2 class="h5 text-success mb-3">O que a aplicação oferece?</h2>

            <ul class="list-group list-group-flush">
              <li
                v-for="funcionalidade in funcionalidades"
                :key="funcionalidade"
                class="list-group-item px-0"
              >
                {{ funcionalidade }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="col-12 col-lg-6">
        <article class="card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <h2 class="h5 text-success mb-3">Tecnologias utilizadas</h2>

            <dl class="mb-0">
              <template
                v-for="tecnologia in tecnologias"
                :key="tecnologia.nome"
              >
                <dt>{{ tecnologia.nome }}</dt>
                <dd class="text-body-secondary mb-3">
                  {{ tecnologia.descricao }}
                </dd>
              </template>
            </dl>
          </div>
        </article>
      </div>
    </div>

    <article class="card border-0 shadow-sm mt-4">
      <div class="card-body p-4">
        <h2 class="h5 text-success mb-3">Como funciona a consulta de CEP?</h2>

        <ol class="mb-3">
          <li>O usuário informa o CEP e envia o formulário.</li>
          <li>O serviço valida o CEP e faz uma requisição GET.</li>
          <li>O ViaCEP responde com dados no formato JSON.</li>
          <li>O Vue atualiza a tela com o endereço recebido.</li>
        </ol>

        <p class="text-body-secondary">
          Durante a consulta, a aplicação mostra um indicador de carregamento.
          Se houver uma falha ou o CEP não existir, uma mensagem explica o
          resultado.
        </p>

        <RouterLink to="/consultar-cep" class="btn btn-outline-success">
          Experimentar consulta
        </RouterLink>
      </div>
    </article>

    <div class="alert alert-info mt-4 mb-0">
      Os hotéis são exemplos definidos no código, e as reservas são simulações
      sem cobrança ou armazenamento em servidor. A consulta de endereços utiliza
      o serviço externo ViaCEP.
    </div>
  </section>
</template>
