<template>
  <v-app style="background-color: #DCDCDC">
    <toolbar />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-snackbar
      :timeout="snack.timeout"
      :color="snack.color"
      bottom
      v-model="snack.visible"
    >
      {{snack.text}}
      <v-btn dark text @click.native="closeSnack">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import toolbar from '~/components/toolbar.vue'
export default {
  components: {
    toolbar
  },
  data: () => ({
  }),
  computed: {
    snack () {
      return JSON.parse(JSON.stringify(this.$store.state.snack.snack))
    }
  },
  methods: {
    closeSnack () {
      this.$store.commit('snack/hide')
    }
  }
}
</script>

<style>
  @import '~/assets/main.css';
</style>
