import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import GruposSoftwares from '~/pages/grupos_softwares.vue'
import GruposPermissoes from '~/pages/grupos_permissoes.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/grupos_softwares', component: GruposSoftwares, name: 'grupos_softwares'},
    {path: '/grupos_permissoes', component: GruposPermissoes, name: 'grupos_permissoes'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
