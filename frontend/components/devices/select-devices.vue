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
    <div class="horizontal-flex">
      <div class="fundo-branco">
        <v-autocomplete
          v-model="employee.computers"
          :items="computers_list"
          item-color="pink lighten-1"
          width="1000"
          filled
          placeholder="Computadores"
          solo
          prepend-icon="mdi-laptop"
          multiple
          light
          dense
          hide-details
          return-object
          item-text="patrimonio"
          item-value="patrimonio"
          @change="changeComputers()"
        >
          <template v-slot:selection="data">
            <v-chip
              @mouseover="showDetails(data.item)"
              @mouseleave="hideDetails()"
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
              <v-list-item-content
                @mouseover="showDetails(data.item)"
                @mouseleave="hideDetails()">
                <v-list-item-title
                  >{{ data.item.patrimonio }}
                  {{ data.item._str }}</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
        <v-autocomplete
          v-model="employee.cellphones"
          :items="cellphones_list"
          item-color="pink lighten-1"
          filled
          dense
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
              @mouseover="showDetails(data.item)"
              @mouseleave="hideDetails()"
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
                <v-list-item-title>{{
                  data.item.patrimonio
                }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
        <v-autocomplete
          v-model="employee.other_devices"
          :items="other_devices_list"
          item-color="pink lighten-1"
          filled
          dense
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
              @mouseover="showDetails(data.item)"
              @mouseleave="hideDetails()"
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
                <v-list-item-title
                  >{{ data.item.patrimonio }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
        <v-autocomplete
          v-model="employee.chips"
          :items="chips_list"
          item-color="pink lighten-1"
          filled
          placeholder="Outros Dispositivos"
          solo
          dense
          prepend-icon="mdi-chip"
          multiple
          light
          hide-details
          return-object
          item-text="phone_number"
          item-value="phone_number"
          @change="changeChips()"
        >
          <template v-slot:selection="data">
            <v-chip
              @mouseover="showDetails(data.item)"
              @mouseleave="hideDetails()"
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="removeChips(data.item)"
            >
              {{ data.item.phone_number | celular}}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template>
              <v-list-item-content>
                <v-list-item-title
                  >{{ data.item.phone_number | celular}}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
      </div>
      <div class="fundo-branco infos" style="color: black">
        <div v-if="deviceToShow && deviceToShow.kind === 'computer'" class="info-device">
          <img src="~/static/laptop.png" class="slack-logo ma-2" />
          <spam>{{deviceToShow.patrimonio}}</spam>
          <span>{{deviceToShow.marca}} {{deviceToShow.modelo}}</span>
          <spam>{{deviceToShow.processador}} {{deviceToShow.ssd}}gb {{deviceToShow.ram}}gb</spam>
          <spam>Atual: {{deviceToShow.os_atual}}</spam>
          <spam>Original: {{deviceToShow.os_original}}</spam>
          <spam>Admin: {{deviceToShow.admin_local}}</spam>
          <spam>Senha: {{deviceToShow.senha_admin}}</spam>
          <spam>Garantia: {{deviceToShow.garantia_expira}}</spam>
          <spam>Observações: {{deviceToShow.observacoes}}</spam>

        </div>
        <div v-else-if="deviceToShow && deviceToShow.kind === 'cellphone'" class="info-device">
          <img src="~/static/smartphone.png" class="slack-logo ma-2" />
          <spam>{{deviceToShow.patrimonio}}</spam>
          <spam>{{deviceToShow.imei}}</spam>
          <span>{{deviceToShow.marca}} {{deviceToShow.modelo}}</span>
          <spam>Garantia: {{deviceToShow.garantia_expira}}</spam>
          <spam>Observações: {{deviceToShow.observacoes}}</spam>
        </div>
        <div v-else-if="deviceToShow && deviceToShow.kind === 'chip'" class="info-device">
          <img src="~/static/chip.png" class="slack-logo ma-2" />
          <span>{{deviceToShow.phone_number | celular}}</span>
          <span>{{deviceToShow.iccid}}</span>
          <spam>Observações: {{deviceToShow.observacoes}}</spam>
        </div>
        <div v-else-if="deviceToShow" class="info-device">
          <img src="~/static/other_devices.png" class="slack-logo ma-2" />
          <spam>{{deviceToShow.patrimonio}}</spam>
          <span>{{deviceToShow.marca}} {{deviceToShow.modelo}}</span>
          <spam>Observações: {{deviceToShow.observacoes}}</spam>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import employeehelper from "./../../helpers/employees/employeehelper"
export default {
  props: ["devices", "employee"],
  data() {
    return {
      deviceToShow: null,
      showComputer: false,
      state: employeehelper.state,
    };
  },
  methods: {
    changeComputers() {
      this.$store.commit("devices/assing_computers_to", this.employee);
      this.edit_employee()
    },
    removeComputers(item) {
      const index = this.employee.computers.indexOf(item);
      if (index >= 0) this.employee.computers.splice(index, 1);
      this.$store.commit("devices/assing_computers_to", this.employee);
      this.edit_employee()
    },
    changeCellphones() {
      this.$store.commit("devices/assing_cellphones_to", this.employee);
      this.edit_employee()
    },
    removeCellphones(item) {
      const index = this.employee.cellphones.indexOf(item);
      if (index >= 0) this.employee.cellphones.splice(index, 1);
      this.$store.commit("devices/assing_cellphones_to", this.employee);
      this.edit_employee()
    },
    changeOtherDevices() {
      this.$store.commit("devices/assing_other_devices_to", this.employee);
      this.edit_employee()
    },
    removeOtherDevices(item) {
      const index = this.employee.other_devices.indexOf(item);
      if (index >= 0) this.employee.other_devices.splice(index, 1);
      this.$store.commit("devices/assing_other_devices_to", this.employee);
      this.edit_employee()
    },
    changeChips() {
      this.$store.commit("devices/assing_chips_to", this.employee);
      this.edit_employee()
    },
    removeChips(item) {
      const index = this.employee.chips.indexOf(item);
      if (index >= 0) this.employee.chips.splice(index, 1);
      this.$store.commit("devices/assing_chips_to", this.employee);
      this.edit_employee()
    },
    showDetails(device) {
      this.showComputer = !this.showComputer;
      this.deviceToShow = device;
    },
    hideDetails() {
      this.showComputer = false;
      this.deviceToShow = null;
    },
    edit_employee() {
      if (!this.employee.edited) {
        this.employee.edited = true;
        this.employee.state = this.state.MODIFIED;
        this.$store.commit("employees/increment");
      }
    },
  },
  computed: {
    computers_list() {
      let _computers = this.devices.computers.filter(
        (item) => item.assigned_to === null
      );
      if (this.employee.computers) {
        return _computers.concat(this.employee.computers);
      } else {
        return _computers;
      }
    },
    cellphones_list() {
      let _cellphones = this.devices.cellphones.filter(
        (item) => item.assigned_to === null
      );
      if (this.employee.cellphones) {
        return _cellphones.concat(this.employee.cellphones);
      } else {
        return _cellphones;
      }
    },
    other_devices_list() {
      let _other_devices = this.devices.other_devices.filter(
        (item) => item.assigned_to === null
      );
      if (this.employee.other_devices) {
        return _other_devices.concat(this.employee.other_devices);
      } else {
        return _other_devices;
      }
    },
    chips_list() {
      let _chips = this.devices.chips.filter(
        (item) => item.assigned_to === null
      );
      if (this.employee.chips) {
        return _chips.concat(this.employee.chips);
      } else {
        return _chips;
      }
    },
  },
  filters: {
    celular: function (value) {
      let ddd = value.slice(0, 2);
      let primeira_parte = value.slice(2, 7);
      let segunda_parte = value.slice(7);
      return "(" + ddd + ") " + primeira_parte + "-" + segunda_parte;
    },
  },
};
</script>

<style scoped>
.gaveta {
  display: flex;
  flex-direction: column;
  width: 800px;
}

.slack-logo {
  width: 50px;
  height: auto;
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
.horizontal-flex {
  display: flex;
}
.infos {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-device {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
