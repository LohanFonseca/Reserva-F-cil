import { createRouter, createWebHistory } from 'vue-router';

import ConsultarCepView from '../views/ConsultarCepView.vue';
import HomeView from '../views/HomeView.vue';
import HoteisView from '../views/HoteisView.vue';
import SobreView from '../views/SobreView.vue';
import NaoEncontradaView from '../views/NaoEncontradaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView,
      meta: { titulo: 'Início' },
    },
    {
      path: '/hoteis',
      name: 'hoteis',
      component: HoteisView,
      meta: { titulo: 'Hotéis' },
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView,
      meta: { titulo: 'Sobre' },
    },
    {
      path: '/consultar-cep',
      name: 'consultar-cep',
      component: ConsultarCepView,
      meta: { titulo: 'Consultar CEP' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'nao-encontrada',
      component: NaoEncontradaView,
      meta: { titulo: 'Página não encontrada' },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = `${to.meta.titulo} | Reserva Fácil`;
});

export default router;
