<template>
  <div>
    <tableHeader />
    <employeesTable :employees="employees" class="ml-5 mr-5" />
  </div>
</template>

<script>

import tableHeader from '~/components/home/table_header.vue'
import employeesTable from '~/components/home/table.vue'
import api from '~api'

export default {
  components: {
    employeesTable,
    tableHeader
  },
  data () {
    return {}
  },
  asyncData () {
    return api.list_employees().then(result => {
      return {
        employees: result.data
      }
    })
  }
}
</script>

<style scoped>
</style>
