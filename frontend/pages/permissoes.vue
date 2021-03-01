<template>
  <h1>página de permissões</h1>
</template>

<script>
import api from "~api";

export default {
  data() {
    return {};
  },
  asyncData() {
    return api.list_permissions().then((result2) => {
      return {
        permissionList: result2.data,
      };
    });
  },
  methods: {
    add_permission() {
      this.permissionList.push({
        id: 10,
        subgroup: null,
        refers_to: "metabase",
        level: "read",
      });
    },
  },
};
</script>
