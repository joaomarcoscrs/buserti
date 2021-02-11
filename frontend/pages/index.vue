<template>
  <div>
    <tableHeader />
    <employeesTable />
  </div>
</template>

<script>

import tableHeader from '~/components/home/table_header.vue'
import employeesTable from '~/components/home/table.vue'

export default {
  components: {
    employeesTable,
    tableHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
