<template>
  <v-layout justify-start align-start wrap class="container-grupos">
    <div v-for="group in groups" :key="group.id">
      <groupcard :group="group" />
    </div>
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
    return api.list_groups().then(result => {
      return {
        groups: result.data
      }
    })
  }
}
</script>

<style scoped>
.container-grupos {
  overflow-x: hidden;
}
</style>
