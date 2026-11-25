import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  timeout: 10000,
});

export async function buscarEnderecoPorCep(cep) {
  const cepLimpo = String(cep).replace(/\D/g, '');

  if (!/^\d{8}$/.test(cepLimpo)) {
    throw new Error('Digite um CEP com 8 números.');
  }

  const { data } = await api.get(`${cepLimpo}/json/`);

  if (data.erro) {
    throw new Error('CEP não encontrado.');
  }

  return data;
}
