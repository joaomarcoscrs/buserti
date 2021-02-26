<template>
  <div>
    <v-layout class="my-3">
      <img class="table-title-logo mx-2" src="~/static/other_devices.png" />
      <h1
        class="table-title-text-nome"
        style="font-size: 30px; font-weight: 300"
      >
        outros
      </h1>
    </v-layout>
    <v-layout class="table mb-4 mx-3" align-center row-wrap justify-start>
      <div class="table-nome" style="height: 100%">
        <div class="table-slack" style="height: 100%">
          <h3
            class="table-title-text-nome"
            style="font-size: 16px; font-weight: 500"
          >
            patrimônio
          </h3>
        </div>
      </div>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            disabled
            value="kind"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            disabled
            value="marca"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            disabled
            value="modelo"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            disabled
            value="num. série"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title slack-atribuido" style="height: 100%">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            disabled
            value="atribuído a"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
    </v-layout>
    <div class="overflow-box mx-3">
      <div v-for="device in devices" :key="device.id">
        <v-layout class="table" align-center row-wrap justify-start>
          <div v-if="device.patrimonio" class="table-nome" style="height: 100%">
            <div class="table-slack" style="height: 100%">
              <h3 class="table-title-text-nome">{{ device.patrimonio }}</h3>
            </div>
          </div>
          <v-layout
            v-if="device.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="kind"
                v-model="device.kind"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="device.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="marca"
                v-model="device.marca"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="device.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="modelo"
                v-model="device.modelo"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="device.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="num. série"
                v-model="device.serial_number"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="device.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <div class="table-title-text slack-atribuido">
                {{ device.assigned_to }}
              </div>
            </div>
          </v-layout>
          <v-layout
            v-if="!device.patrimonio"
            class="table"
            justify-start
            align-center
          >
            <div class="table-nome ma-0 pa-0" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="patrimônio"
                v-model="new_patrimonio_device"
                dense
                light
                hide-details
                @change="add_device_patrimonio(device)"
              />
            </div>
          </v-layout>
        </v-layout>
        <v-divider color="#969696" class="mt-2 mb-2" />
      </div>
      <v-btn
        v-if="!adding_device"
        class="mx-2"
        dark
        icon
        text
        @click="add_device()"
      >
        <v-icon class="cor-cinza" dark size="27"> mdi-plus </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["devices"],
  data: () => ({
    selectedItem: null,
    adding_device: false,
    new_patrimonio_device: "",
  }),
  methods: {
    add_device() {
      if (!this.adding_device) {
        this.devices.push({ patrimonio: "" });
        this.adding_device = true;
      }
    },
    add_device_patrimonio(device) {
      device.patrimonio = this.new_patrimonio_device;
      this.new_patrimonio_device = "";
      this.adding_device = false;
    },
  },
};
</script>

<style scoped>
.container-linha {
  width: 70px;
  margin-left: 5px;
  margin-right: 5px;
}
.texto-gaveta {
  font-size: 16px;
  font-weight: 400;
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
.table-erro {
  height: 45px;
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
.slack-atribuido {
  width: 100px;
}
.debug-azul {
  background-color: lightblue;
}
.debug-vermelho {
  background-color: lightcoral;
}
.overflow-box {
  overflow-y: auto;
  height: 300px;
}
.table-title-logo {
  max-height: 30px;
  margin: 10px;
}
</style>
