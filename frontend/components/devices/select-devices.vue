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
      <!-- <v-autocomplete
        return-object
        v-model="employee.computers"
        :items="computers_list"
        item-color="pink lighten-1"
        @change="change()"
        attach
        chips
        solo
        item-text="patrimonio"
        placeholder="Computadores"
        background-color="white"
        prepend-icon="mdi-laptop"
        multiple
        light
        filled
        hide-details
      >
        <template v-slot:item="data">
          <v-list-tile-content @mouseover="showDetails">
              <p>{{data.item.patrimonio}} {{data.item._str}}</p> -->
              <!-- <v-icon v-show="active">mdi-laptop</v-icon> -->
          <!-- </v-list-tile-content>
        </template>
      </v-autocomplete> -->
      <v-autocomplete
        v-model="employee.computers"
        :items="computers_list"
        item-color="pink lighten-1"
        filled
        placeholder="Computadores"
        solo
        prepend-icon="mdi-laptop"
        multiple
        light
        hide-details
        return-object
        item-text="patrimonio"
        item-value="patrimonio"
        @change="changeComputers()"
      >
        <template v-slot:selection="data">
          <v-chip
            v-bind="data.attrs"
            :input-value="data.selected"
            close
            @click="data.select"
            @click:close="removeComputers(data.item)"
          >
            {{ data.item.patrimonio }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template>
            <v-list-item-content>
              <v-list-item-title >{{data.item.patrimonio}} {{data.item._str}}</v-list-item-title>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
      <v-autocomplete
        v-model="employee.cellphones"
        :items="cellphones_list"
        item-color="pink lighten-1"
        filled
        placeholder="Celulares"
        solo
        prepend-icon="mdi-cellphone"
        multiple
        light
        hide-details
        return-object
        item-text="patrimonio"
        item-value="patrimonio"
        @change="changeCellphones()"
      >
        <template v-slot:selection="data">
          <v-chip
            v-bind="data.attrs"
            :input-value="data.selected"
            close
            @click="data.select"
            @click:close="removeCellphones(data.item)"
          >
            {{ data.item.patrimonio }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template>
            <v-list-item-content>
              <v-list-item-title >{{data.item.patrimonio}}</v-list-item-title>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
      <v-autocomplete
        v-model="employee.other_devices"
        :items="other_devices_list"
        item-color="pink lighten-1"
        filled
        placeholder="Outros Dispositivos"
        solo
        prepend-icon="mdi-devices"
        multiple
        light
        hide-details
        return-object
        item-text="patrimonio"
        item-value="patrimonio"
        @change="changeOtherDevices()"
      >
        <template v-slot:selection="data">
          <v-chip
            v-bind="data.attrs"
            :input-value="data.selected"
            close
            @click="data.select"
            @click:close="removeOtherDevices(data.item)"
          >
            {{ data.item.patrimonio }}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template>
            <v-list-item-content>
              <v-list-item-title >{{data.item.patrimonio}} </v-list-item-title>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
      <!-- <v-autocomplete
        return-object
        :items="devices.cellphones"
        item-color="pink lighten-1"
        attach
        chips
        item-text="patrimonio"
        solo
        placeholder="Celulares"
        background-color="white"
        prepend-icon="mdi-cellphone"
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
        prepend-icon="mdi-devices"
        multiple
        light
        filled
        hide-details
      ></v-autocomplete> -->
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
    changeComputers () {
      this.$store.commit("devices/assing_computers_to", this.employee)
    },
    removeComputers (item) {
      const index = this.employee.computers.indexOf(item)
      if (index >= 0) this.employee.computers.splice(index, 1)
      this.$store.commit("devices/assing_computers_to", this.employee)
    },
    changeCellphones () {
      this.$store.commit("devices/assing_cellphones_to", this.employee)
    },
    removeCellphones (item) {
      const index = this.employee.cellphones.indexOf(item)
      if (index >= 0) this.employee.cellphones.splice(index, 1)
      this.$store.commit("devices/assing_cellphones_to", this.employee)
    },
    changeOtherDevices () {
      this.$store.commit("devices/assing_other_devices_to", this.employee)
    },
    removeOtherDevices (item) {
      const index = this.employee.other_devices.indexOf(item)
      if (index >= 0) this.employee.other_devices.splice(index, 1)
      this.$store.commit("devices/assing_other_devices_to", this.employee)
    }
  },
  computed: {
    computers_list () {
      let _computers = this.devices.computers.filter(item => item.assigned_to === null)
      if (this.employee.computers) {
        return _computers.concat(this.employee.computers)
      } else {
        return _computers
      }
    },
    cellphones_list () {
      let _cellphones = this.devices.cellphones.filter(item => item.assigned_to === null)
      if (this.employee.cellphones) {
        return _cellphones.concat(this.employee.cellphones)
      } else {
        return _cellphones
      }
    },
    other_devices_list () {
      let _other_devices = this.devices.other_devices.filter(item => item.assigned_to === null)
      if (this.employee.other_devices) {
        return _other_devices.concat(this.employee.other_devices)
      } else {
        return _other_devices
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
