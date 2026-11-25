<script setup>
import { ref } from 'vue';
import { buscarEnderecoPorCep } from '../services/api.js';

const cep = ref('');
const endereco = ref(null);
const carregando = ref(false);
const erro = ref('');

async function consultarCep() {
  if (carregando.value) return;

  endereco.value = null;
  erro.value = '';
  carregando.value = true;

  try {
    endereco.value = await buscarEnderecoPorCep(cep.value);
  } catch (falha) {
    erro.value = falha.isAxiosError
      ? 'Não foi possível consultar o serviço. Tente novamente.'
      : falha.message || 'Ocorreu um erro ao consultar o CEP.';
  } finally {
    carregando.value = false;
  }
}
</script>

<template>
  <section aria-labelledby="titulo-cep">
    <h1 id="titulo-cep" class="text-success">
      Consultar CEP
    </h1>

    <p class="lead text-body-secondary">
      Consulte o endereço de um local para ajudar no planejamento
      da sua viagem.
    </p>

    <div class="row g-4">
      <div class="col-12 col-lg-5">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <h2 class="h5 mb-3">Informe o CEP</h2>

            <form @submit.prevent="consultarCep">
              <label for="cep" class="form-label">
                CEP
              </label>

              <input
                id="cep"
                v-model="cep"
                class="form-control"
                type="text"
                name="cep"
                inputmode="numeric"
                autocomplete="postal-code"
                placeholder="Ex.: 01001-000"
                maxlength="9"
                pattern="[0-9]{5}-?[0-9]{3}"
                aria-describedby="cep-ajuda"
                :disabled="carregando"
                required
              />

              <div id="cep-ajuda" class="form-text mb-3">
                Digite oito números, com ou sem hífen.
              </div>

              <button
                type="submit"
                class="btn btn-success w-100"
                :disabled="carregando"
              >
                <span
                  v-if="carregando"
                  class="spinner-border spinner-border-sm me-2"
                  aria-hidden="true"
                ></span>

                {{ carregando ? 'Consultando...' : 'Consultar endereço' }}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-7" :aria-busy="carregando">
        <div role="status" aria-live="polite">
          <p v-if="carregando" class="alert alert-info">
            Buscando endereço no ViaCEP...
          </p>
        </div>

        <div v-if="erro" class="alert alert-danger" role="alert">
          {{ erro }}
        </div>

        <article
          v-if="endereco"
          class="card border-success shadow-sm"
          aria-labelledby="titulo-endereco"
        >
          <div class="card-body p-4">
            <h2 id="titulo-endereco" class="h5 text-success mb-3">
              Endereço encontrado
            </h2>

            <dl class="row mb-0">
              <dt class="col-sm-4">CEP</dt>
              <dd class="col-sm-8">{{ endereco.cep }}</dd>

              <dt class="col-sm-4">Logradouro</dt>
              <dd class="col-sm-8">
                {{ endereco.logradouro || 'Não informado' }}
              </dd>

              <dt class="col-sm-4">Bairro</dt>
              <dd class="col-sm-8">
                {{ endereco.bairro || 'Não informado' }}
              </dd>

              <dt class="col-sm-4">Cidade</dt>
              <dd class="col-sm-8">{{ endereco.localidade }}</dd>

              <dt class="col-sm-4">UF</dt>
              <dd class="col-sm-8 mb-0">{{ endereco.uf }}</dd>
            </dl>
          </div>
        </article>

        <div
          v-if="!carregando && !erro && !endereco"
          class="bg-white border rounded-3 p-4 text-body-secondary"
        >
          O endereço consultado aparecerá aqui.
        </div>
      </div>
    </div>

    <p class="small text-body-secondary mt-4">
      Fonte dos endereços: ViaCEP. A consulta não verifica a
      disponibilidade dos hotéis.
    </p>
  </section>
</template>