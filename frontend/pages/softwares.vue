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
          items: [
            {
              id: 1,
              name: 'office',
              image: '~/assets/software_imgs/office.png'
            },
            {
              id: 2,
              name: 'powerbi',
              image: '~/assets/software_imgs/powerbi.png'
            }
          ]
        },
        {
          id: 2,
          title: 'people',
          items: [
            {
              id: 1,
              name: 'office',
              image: '~/assets/software_imgs/office.png'
            },
            {
              id: 2,
              name: 'powerbi',
              image: '~/assets/software_imgs/powerbi.png'
            },
            {
              id: 3,
              name: 'jazzhr',
              image: '~/assets/software_imgs/jazzhr.png'
            }
          ]
        },
        {
          id: 3,
          title: 'dev',
          items: [
            {
              id: 4,
              name: 'pycharm',
              image: '~/assets/software_imgs/pycharm.png'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
