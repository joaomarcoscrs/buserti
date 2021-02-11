import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Softwares from '~/pages/softwares.vue'
import Permissoes from '~/pages/permissoes.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/softwares', component: Softwares, name: 'softwares'},
    {path: '/permissoes', component: Permissoes, name: 'permissoes'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
