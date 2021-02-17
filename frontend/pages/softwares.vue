<template>
  <v-layout justify-start align-start wrap class="container-grupos">
    <div v-for="group in groups" :key="group.id">
      <groupcard :group="group" :softwareList="softwareList" />
    </div>
    <v-btn height="300" width="400" light plain class="ma-3 botao-card" @click="add_software_group()">
      <v-card light class="ma-3" height="300" width="400" hover>
        <v-card-title class="card-title">adicionar grupo</v-card-title>
        <v-icon class="icone-add-botao" size="100">mdi-account-multiple-plus</v-icon>
      </v-card>
    </v-btn>
  </v-layout>
</template>

<script>
import groupcard from '~/components/groups/group_card.vue'
import api from '~api'

export default {
  components: {
    groupcard
  },
  data () {
    return {
    }
  },
  asyncData () {
    return api.list_software_groups().then(result => {
      return api.list_softwares().then(result2 => {
        return {
          groups: result.data,
          softwareList: result2.data
        }
      })
    })
  },
  methods: {
    add_software_group () {
      this.groups.push({
        id: 10,
        title: 'novo grupo',
        items: []
      })
    }
  }
}
</script>

<style scoped>
  .container-grupos {
    overflow-x: hidden;
  }
  .card-title {
    font-weight: 300;
    font-size: 24px;
    color: #5B5B5B;
    text-transform: lowercase;
  }
  .botao-card {
    opacity: 0.4;
  }
  .icone-add-botao {
    margin-top: 10%;
  }
</style>
