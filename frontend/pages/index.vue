<template>
  <div>
    <tableHeader :employees="employees" />
    <employeesTable :employees="employees" class="ml-5 mr-5" />
  </div>
</template>

<script>
import tableHeader from "~/components/home/table_header.vue";
import employeesTable from "~/components/home/table.vue";
import api from "~api";

export default {
  components: {
    employeesTable,
    tableHeader,
  },
  data() {
    return {};
  },
  asyncData() {
    return api.list_employees().then((result) => {
      return {
        employees: result.data,
      };
    });
  },
  mounted() {
    api.list_devices().then((result) => {
      this.$store.commit("devices/setdevices", result.data);
    });
    api.list_software_groups().then((result) => {
      this.$store.commit("groups/setSoftwareGroups", result.data);
    });
    api.list_permission_groups().then((result) => {
      this.$store.commit("groups/setPermissionGroups", result.data);
    });
  },
};
</script>

<style scoped>
</style>
