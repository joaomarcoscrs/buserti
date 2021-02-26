<template>
  <div>
    <v-card light color="#ECECEC" elevation="4" class="pa-2 ma-1 mb-4">
      <computers :computers="computers" />
    </v-card>
    <div class="devices-lower-box">
      <v-card
        light
        color="#ECECEC"
        elevation="4"
        class="pa-2 ma-1 mr-2 lower-box-element"
      >
        <cellphones :cellphones="cellphones" />
      </v-card>
      <v-card
        light
        color="#ECECEC"
        elevation="4"
        class="pa-2 ma-1 ml-2 lower-box-element"
      >
        <chips :chips="chips" />
      </v-card>
      <v-card
        light
        color="#ECECEC"
        elevation="4"
        class="pa-2 ma-1 ml-2 lower-box-element"
      >
        <others :devices="other_devices" />
      </v-card>
    </div>
  </div>
</template>

<script>
import api from "~api";
import computers from "~/components/devices/computers.vue";
import cellphones from "~/components/devices/cellphones.vue";
import chips from "~/components/devices/chips.vue";
import others from "~/components/devices/other_devices.vue";

export default {
  components: {
    computers,
    cellphones,
    chips,
    others,
  },
  data: () => ({
    selectedItem: null,
    computers: [{}],
    cellphones: [{}],
    chips: [{}],
    other_devices: [{}],
  }),
  mounted() {
    api.list_devices().then((result) => {
      this.computers = result.data.filter((d) => d.kind === "computer");
      this.cellphones = result.data.filter((d) => d.kind === "cellphone");
      this.other_devices = result.data.filter(
        (d) =>
          d.kind !== "computer" && d.kind !== "cellphone" && d.kind !== "chip"
      );
      const chips = result.data.filter((d) => d.kind === "chip");
      var i;
      for (i = 0; i < chips.length; i++) {
        chips[i]["phonenumber_error"] = false;
        chips[i]["phonenumber_tem_letras"] = false;
        chips[i]["phonenumber_tem_11_digitos"] = false;
        chips[i]["editing_phone_number"] = false;
        chips[i]["altura_linha"] = "table";
      }
      this.chips = chips;
    });
  },
};
</script>

<style scoped>
.devices-lower-box {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}
.lower-box-element {
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
