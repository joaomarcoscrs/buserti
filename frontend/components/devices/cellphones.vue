<template>
  <div>
    <v-layout class="my-3">
      <img class="table-title-logo mx-2" src="~/static/smartphone.png" />
      <h1
        class="table-title-text-nome"
        style="font-size: 30px; font-weight: 300"
      >
        celulares
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
            value="garantia"
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
            value="IMEI"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout
        class="container-linha"
        style="max-width: 50px"
        justify-start
        align-center
      >
        <div class="table-title" style="height: 100%; width: 35px">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            value="ram"
            disabled
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout
        class="container-linha"
        style="max-width: 50px"
        justify-start
        align-center
      >
        <div class="table-title" style="height: 100%; width: 40px">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            disabled
            value="rom"
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
      <div v-for="cellphone in cellphones" :key="cellphone.id">
        <v-layout class="table" align-center row-wrap justify-start>
          <div
            v-if="cellphone.patrimonio"
            class="table-nome"
            style="height: 100%"
          >
            <div class="table-slack" style="height: 100%">
              <h3 class="table-title-text-nome">{{ cellphone.patrimonio }}</h3>
            </div>
          </div>
          <v-layout
            v-if="cellphone.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="marca"
                v-model="cellphone.marca"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="cellphone.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="modelo"
                v-model="cellphone.modelo"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="cellphone.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="garantia_expira"
                v-model="cellphone.garantia_expira"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="cellphone.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="IMEI"
                v-model="cellphone.imei"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="cellphone.patrimonio"
            class="container-linha"
            justify-start
            align-center
            style="max-width: 50px"
          >
            <div class="table-title" style="height: 100%; width: 35px">
              <v-text-field
                class="table-title-text"
                v-model="cellphone.ram"
                dense
                light
                hide-details
              />
              <span class="suffix-text cor-cinza-escuro">&nbsp;gb</span>
            </div>
          </v-layout>
          <v-layout
            v-if="cellphone.patrimonio"
            class="container-linha"
            justify-start
            align-center
            style="max-width: 50px"
          >
            <div class="table-title" style="height: 100%; width: 40px">
              <v-text-field
                class="table-title-text"
                placeholder="rom"
                v-model="cellphone.rom"
                dense
                light
                hide-details
              />
              <span class="suffix-text cor-cinza-escuro">&nbsp;gb</span>
            </div>
          </v-layout>
          <v-layout
            v-if="cellphone.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <div class="table-title-text slack-atribuido">
                {{ cellphone.assigned_to }}
              </div>
            </div>
          </v-layout>
          <v-layout
            v-if="!cellphone.patrimonio"
            class="table"
            justify-start
            align-center
          >
            <div class="table-nome ma-0 pa-0" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="patrimônio"
                v-model="new_patrimonio_cell"
                dense
                light
                hide-details
                @change="add_cellphone_patrimonio(cellphone)"
              />
            </div>
          </v-layout>
        </v-layout>
        <v-divider color="#969696" class="mt-2 mb-2" />
      </div>
      <v-btn
        v-if="!adding_cellphone"
        class="mx-2"
        dark
        icon
        text
        @click="add_cellphone()"
      >
        <v-icon class="cor-cinza" dark size="27"> mdi-plus </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cellphones"],
  data: () => ({
    selectedItem: null,
    adding_cellphone: false,
    new_patrimonio_cell: "",
  }),
  methods: {
    add_cellphone() {
      if (!this.adding_cellphone) {
        this.cellphones.push({ patrimonio: "" });
        this.adding_cellphone = true;
      }
    },
    add_cellphone_patrimonio(cellphone) {
      cellphone.patrimonio = this.new_patrimonio_cell;
      this.new_patrimonio_cell = "";
      this.adding_cellphone = false;
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
.table-title-logo {
  max-height: 45%;
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
.slack-cellphone {
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
