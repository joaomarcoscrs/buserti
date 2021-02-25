<template>
  <div>
    <v-layout class="my-3">
      <img class="table-title-logo" src="~/static/laptop.png">
      <h1 class="table-title-text-nome" style="font-size: 30px; font-weight: 300">computadores</h1>
    </v-layout>
    <v-layout class="table mb-4" align-center row-wrap justify-start>
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
            style="font-size: 16px; font-weight: 500"
            disabled
            value="tipo"
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
            style="font-size: 16px; font-weight: 500"
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
            style="font-size: 16px; font-weight: 500"
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
            style="font-size: 16px; font-weight: 500"
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
            style="font-size: 16px; font-weight: 500"
            disabled
            value="service-tag"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%; width: 35px">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 500"
            value="ram"
            disabled
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%; width: 40px">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 500"
            disabled
            value="ssd"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%; width: 40px">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 500"
            disabled
            value="hd"
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
            style="font-size: 16px; font-weight: 500"
            disabled
            value="OS original"
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
            style="font-size: 16px; font-weight: 500"
            disabled
            value="OS atual"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
    </v-layout>
    <div class="overflow-box">
      <div v-for="computer in computers" :key="computer.id">
        <v-layout class="table" align-center row-wrap justify-start>
          <div v-if="computer.patrimonio" class="table-nome" style="height: 100%">
            <div class="table-slack" style="height: 100%">
              <h3 class="table-title-text-nome">{{ computer.patrimonio }}</h3>
            </div>
          </div>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="tipo"
                v-model="computer.kind"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="marca"
                v-model="computer.marca"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="modelo"
                v-model="computer.modelo"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="garantia_expira"
                v-model="computer.garantia_expira"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="service-tag"
                v-model="computer.service_tag"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%; width: 35px">
              <v-text-field
                class="table-title-text"
                v-model="computer.ram"
                dense
                light
                hide-details
              />
              <span class="suffix-text cor-cinza-escuro">&nbsp;gb</span>
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%; width: 40px">
              <v-text-field
                class="table-title-text"
                placeholder="ssd"
                v-model="computer.ssd"
                dense
                light
                hide-details
              />
              <span class="suffix-text cor-cinza-escuro">&nbsp;gb</span>
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%; width: 40px">
              <v-text-field
                class="table-title-text"
                placeholder="hd"
                v-model="computer.hd"
                dense
                light
                hide-details
              />
              <span class="suffix-text cor-cinza-escuro">&nbsp;gb</span>
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="OS original"
                v-model="computer.os_original"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="computer.patrimonio"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="OS atual"
                v-model="computer.os_atual"
                dense
                light
                hide-details
              />
            </div>
          </v-layout>
          <v-layout
            v-if="!computer.patrimonio"
            class="table"
            justify-start
            align-center
          >
            <div class="table-nome" style="height: 100%">
              <v-text-field
                class="table-title-text"
                full-width
                placeholder="patrimônio"
                filled
                v-model="new_patrimonio"
                rounded
                dense
                light
                hide-details
                @keyup.enter="add_computer_patrimonio(computer)"
              />
            </div>
          </v-layout>
        </v-layout>
        <v-divider color="#969696" class="mt-2 mb-2" />
      </div>
      <v-btn
        v-if="!adding_computer"
        class="mx-2"
        dark
        icon
        text
        flat
        @click="add_computer()"
      >
        <v-icon class="cor-cinza" dark size="27"> mdi-plus </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  props: ['computers'],
  data: () => ({
    selectedItem: null,
    adding_computer: false,
    new_patrimonio: ''
  }),
  methods: {
    add_computer () {
      if (!this.adding_computer) {
        this.computers.push({ patrimonio: '' })
        this.adding_computer = true
      }
    },
    add_computer_patrimonio (computer) {
      computer.patrimonio = this.new_patrimonio
      this.new_patrimonio = ''
      this.adding_computer = false
    }
  }
}
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
.slack-computer {
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
.overflow-box {
    overflow-y: auto;
    max-height:300px;
}
.table-title-logo {
    max-height: 30px;
    margin: 10px;
}
</style>
