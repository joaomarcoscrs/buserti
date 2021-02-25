<template>
  <div>
    <v-card light color="#ECECEC" elevation="4" class="pa-2 ma-1 mb-4">
      <computers :computers="computers" />
    </v-card>
    <v-card light color="#ECECEC" elevation="4" class="pa-2 ma-1 my-4">
      <cellphones :cellphones="cellphones" />
    </v-card>
  </div>
</template>

<script>
import api from "~api";
import computers from "~/components/devices/computers.vue";
import cellphones from "~/components/devices/cellphones.vue";

export default {
  components: {
    computers,
    cellphones,
  },
  data: () => ({
    selectedItem: null,
    computers: [{}],
    cellphones: [{}],
  }),
  mounted() {
    api.list_devices().then((result) => {
      this.computers = result.data.filter((d) => d.kind === "computer");
      this.cellphones = result.data.filter((d) => d.kind === "cellphone");
    });
  },
};
</script>

<style scoped>
.container-linha {
  min-width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}
.texto-gaveta {
  font-size: 16px;
  font-weight: 500;
  padding-top: 5px;
  padding-left: 2px;
  font-family: "Quicksand" !important;
  text-transform: lowercase;
  font-weight: 700;
}
.table {
  height: 25px;
  position: relative;
}
.table-nome {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column wrap;
  width: 100px;
  margin-right: 5px;
}
.table-title {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.table-title-logo {
  max-height: 45%;
  margin: 10px;
}
.table-title-text {
  font-weight: 300;
  font-size: 13px;
  color: #5b5b5b !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.suffix-text {
  font-weight: 300;
  font-size: 13px;
}
.table-title-text-nome {
  width: 100%;
  font-weight: 400;
  font-size: 13px;
  color: #5b5b5b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-slack {
  margin-top: 2px;
  width: 220px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.slack-device {
  width: 100px;
  font-weight: 400;
  font-size: 14px;
  color: #969696;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slack-logo {
  height: 18px;
  width: auto;
}
.debug-azul {
  background-color: lightblue;
}
.debug-vermelho {
  background-color: lightcoral;
}
</style>
