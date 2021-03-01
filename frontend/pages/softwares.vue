<template>
  <h1>página de softwares</h1>
</template>

<script>
import api from "~api";

export default {
  data() {
    return {};
  },
  asyncData() {
    return api.list_softwares().then((result2) => {
      return {
        softwareList: result2.data,
      };
    });
  },
  methods: {
    add_software() {
      this.softwareList.push({
        id: 10,
        name: "software_novo",
        image: "office.png",
      });
    },
  },
};
</script>
