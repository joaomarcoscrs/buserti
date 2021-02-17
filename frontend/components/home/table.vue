<template>
  <employee :employees="employees" />
</template>

<script>
import employee from '~/components/home/employee.vue'
export default {
  components: {
    employee
  },
  props: ['employees'],
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
