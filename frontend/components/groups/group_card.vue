<template>
  <v-card light class="ma-3 card" height="300" width="400" hover>
    <v-card-title class="card-title">{{ group.title }}</v-card-title>
    <v-card-text class="ma-0 pt-0 pb-1 pl-7 pr-7" v-for="item in group.items" :key="item">
      <img class="software-logo" src="~/static/software/office.png">
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  props: ['group'],
  data () {
    return {}
  }
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
  .software-logo {
      height: 20px;
      width: auto;
  }
</style>
