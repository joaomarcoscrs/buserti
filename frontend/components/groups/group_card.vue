<template>
  <v-card light class="ma-3 card" height="300" width="400" hover>
    <v-card-title class="card-title">{{ group.title }}</v-card-title>
    <v-card-subtitle class="flex-subtitle pt-4">
      <img class="pa-0 card-subtitle" src="~/static/software_icon.png">
      <span class="pa-2 card-subtitle">softwares</span>
    </v-card-subtitle>
    <v-layout column>
      <div class="ma-0 pt-0 pb-1 pl-7 pr-7" v-for="software in group.items" :key="software.id">
        <img class="software-logo" :src="software.image">
      </div>
      <v-btn text class="ml-5 cor-rosa-buser botao-add"><span style="font-size: 13px;">adicionar</span></v-btn>
    </v-layout>
  </v-card>
</template>

<script>

export default {
  props: ['group'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
  .card:hover {
      cursor: default;
  }
  .card-title {
      font-weight: 300;
      font-size: 24px;
      color: #5B5B5B;
  }
  .card-subtitle {
      font-weight: 300;
      font-size: 18px;
      color: #5B5B5B;
  }
  .software-logo {
      height: 30px;
  }
  .card-subtitle {
      height: 30px;
      width: auto;
  }
  .flex-subtitle {
      display: flex;
      align-items: flex-start;
  }
  .botao-add {
    width: 100px;
  }
</style>
