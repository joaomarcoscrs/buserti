<template>
  <div>
    <v-card light class="ma-3 card" height="300" width="400" hover>
      <v-card-title class="card-title">{{ group.title }}</v-card-title>
      <v-card-subtitle class="flex-subtitle pt-4">
        <img class="pa-0 card-subtitle" src="~/static/software_icon.png">
        <span class="pa-2 card-subtitle">softwares</span>
      </v-card-subtitle>
      <v-layout column>
        <div @add-software="add_software" class="ma-0 pt-0 pb-1 pl-7 pr-7" v-for="software in group.items" :key="software.id">
          <v-layout justify-start>
            <img class="software-logo" :src="software.image">
            <v-btn text icon x-small @click="remove_software($event, software)"><v-icon x-small>mdi-close</v-icon></v-btn>
          </v-layout>
        </div>
        <v-btn @click="open_software_dialog($event)" text class="ml-5 cor-rosa-buser botao-add"><span style="font-size: 13px;">adicionar</span></v-btn>
      </v-layout>
    </v-card>
    <softwareDialog @add-software="add_software" :softwareList="softwareList" ref="software_dialog" />
  </div>
</template>

<script>
import softwareDialog from '~/components/groups/software-dialog.vue'

export default {
  components: {
    softwareDialog
  },
  props: ['group', 'softwareList'],
  data () {
    return {}
  },
  methods: {
    open_software_dialog (evt) {
      this.$refs.software_dialog.open(this.group, this.softwareList)
      evt.stopPropagation()
    },
    remove_software (evt, software) {
      this.group.items = this.group.items.filter(el => el.id !== software.id)
    },
    add_software (software) {
      this.group.items.push(software)
    }
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
