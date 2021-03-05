<template>
  <div class="gaveta">
    <div
      class="fundo-rosa-buser title-gaveta"
      style="
        text-transform: lowercase;
        font-family: 'Quicksand';
        font-size: 24px;
        font-weight: 400;
      "
    >
      Dispositivos
    </div>
    <div class="fundo-branco">
      <v-autocomplete
        return-object
        v-model="employee.computers"
        :items="computers_list"
        item-color="pink lighten-1"
        @change="change($event)"
        attach
        chips
        item-text="patrimonio"
        solo
        placeholder="Computadores"
        background-color="white"
        multiple
        light
        filled
        hide-details
      ></v-autocomplete>
      <v-autocomplete
        return-object
        :items="devices.cellphones"
        item-color="pink lighten-1"
        attach
        chips
        item-text="patrimonio"
        solo
        placeholder="Celulares"
        background-color="white"
        multiple
        light
        filled
        hide-details
      ></v-autocomplete>
      <v-autocomplete
        return-object
        :items="devices.other_devices"
        item-color="pink lighten-1"
        attach
        chips
        item-text="patrimonio"
        solo
        placeholder="Outros Dispositivos"
        background-color="white"
        multiple
        light
        filled
        hide-details
      ></v-autocomplete>
    </div>
  </div>
</template>

<script>
export default {
  props: ['devices', 'employee'],
  data () {
    return {}
  },
  methods: {
    change (event) {
      console.log("Employee computers = ", this.employee.computers)
      console.log("EVENTO: ", event)
      this.$store.commit("devices/assing_computers_to", this.employee)
      // event.forEach(element => {
      //   element.assigned_to = this.employee.slack
      // })
    }
  },
  computed: {
    computers_list () {
      if (this.employee.computers) {
        return this.devices.computers.filter(item => item.assigned_to === null).concat(this.employee.computers)
      } else {
        return this.devices.computers.filter(item => item.assigned_to === null)
      }
    }
  }
};
</script>

<style scoped>
.gaveta {
  width: 100%;
}

.title-gaveta {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: large;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
