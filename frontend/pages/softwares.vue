<template>
  <v-layout justify-start align-start>
    <div v-for="group in groups" :key="group.id">
      <groupcard :group="group" />
    </div>
  </v-layout>
</template>

<script>
import groupcard from '~/components/groups/group_card.vue'

export default {
  components: {
    groupcard
  },
  data () {
    return {
      groups: [
        {
          id: 1,
          title: 'financeiro',
          items: ['office', 'powerbi']
        },
        {
          id: 2,
          title: 'people',
          items: ['office', 'powerbi', 'jazzhr']
        },
        {
          id: 3,
          title: 'dev',
          items: ['pycharm']
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
