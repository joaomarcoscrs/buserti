<template>
  <employee :employees="employees"/>
</template>

<script>
import employee from '~/components/home/employee.vue'
export default {
  props: ['employees'],
  components: {
    employee
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
