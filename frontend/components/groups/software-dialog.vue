<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card light>
      <v-card-title class="card-title mb-1">adicionar software ao grupo {{group.title}}</v-card-title>
      <v-card-text class="pt-1 pb-0" v-for="software in softwares_to_add" :key="software.id">
        <v-btn text @click="add_software_to_group(software)">
          <img class="pa-0 software-logo-add" :src="software.image">
        </v-btn>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn class="blue--text darken-1" text @click="close()">fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      group: {},
      softwareList: []
    }
  },
  computed: {
    softwares_to_add () {
      const adicionar = this.softwareList.map(obj => !this.group.items.find(o => o.id === obj.id))
      const result = []
      for (let i = 0; i < adicionar.length; i++) {
        if (adicionar[i]) {
          result.push(this.softwareList[i])
        }
      }
      return result
    }
  },
  methods: {
    open (group, softwareList) {
      this.group = group
      this.softwareList = softwareList
      this.visible = true
    },
    close () {
      this.visible = false
    },
    add_software_to_group (software) {
      this.$emit('add-software', software)
    }
  }
}
</script>

<style scoped>
  .software-logo-add {
      height: 30px;
  }
  .card-title {
      font-weight: 300 !important;
      font-size: 24px !important;
      color: #5B5B5B;
  }
</style>
