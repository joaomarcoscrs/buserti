<template>
  <div>
    <div v-for="employee in employees" :key="employee.id">
      <v-layout class="table" align-center row-wrap>
        <div v-if="employee.name" class="table-nome" style="height: 100%;">
          <div class="table-slack" style="height: 100%;">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <img class="slack-logo ma-2" src="slack_logo.png" v-bind="attrs" v-on="on">
              </template>
              <span>slack: {{employee.slack}}</span>
            </v-tooltip>
            <h3 class="table-title-text-nome">{{employee.name}}</h3>
          </div>
        </div>
        <v-layout v-if="employee.name" class="table" justify-space-between align-center>
          <div class="table-title" style="height: 100%;">
            <v-text-field class="table-title-text"
                          full-width
                          placeholder="email"
                          v-model="employee.buser_email"
                          filled
                          rounded
                          dense
                          light
                          hide-details
            />
          </div>
          <div class="table-title" style="height: 100%;">
            <!-- <v-text-field class="table-title-text"
                        full-width
                        placeholder="Computador"
                        v-model="employee.computer"
                        filled
                        rounded
                        dense
                        light
                        hide-details
          /> -->
            <v-select
              class="table-title-text"
              :items="computers"
              v-model="employee.computer"
              item-text="patrimonio"
              placeholder="computador"
              @input="afterselection(employee)"
              filled
              rounded
              dense
              light
              hide-details
              solo
            />
          </div>
          <div class="table-title" style="height: 100%;">
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text
                         class="container-gaveta-soft-perms cor-cinza-escuro"
                         light
                         v-bind="attrs"
                         v-on="on"
                  >
                    <span class="texto-gaveta">ver softwares</span>
                  </v-btn>
                </template>
                <v-list light>
                  <v-list-item
                    v-for="(software) in employee.softwares"
                    :key="software"
                  >
                    <v-list-item-title>{{ software }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div class="table-title" style="height: 100%;">
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text
                         color="#5B5B5B"
                         class="container-gaveta-soft-perms"
                         dark
                         v-bind="attrs"
                         v-on="on"
                  >
                    <span class="texto-gaveta">ver permissões</span>
                  </v-btn>
                </template>
                <v-list light>
                  <v-list-item
                    v-for="permissao in employee.permissions"
                    :key="permissao"
                  >
                    <v-list-item-title>{{ permissao }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </v-layout>
        <v-layout v-if="!employee.name" class="table" justify-space-between align-center>
          <div class="table-nome" style="height: 100%;">
            <v-text-field class="table-title-text"
                          full-width
                          placeholder="nome"
                          filled
                          v-model="new_name"
                          rounded
                          dense
                          light
                          hide-details
                          @keyup.enter="add_employee_name(employee)"
            />
          </div>
        </v-layout>
      </v-layout>
      <v-divider color="#969696" class="mt-2 mb-2" />
    </div>
    <v-btn
      v-if="!adding_employee"
      class="mx-2"
      dark
      icon
      text
      flat
      @click="add_employee()"
    >
      <v-icon class="cor-cinza" dark size="27">
        mdi-account-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>

import api from '~api'

export default {
  props: ['employees'],
  data () {
    return {
      new_name: '',
      adding_employee: false,
      computers: ['']
    }
  },
  mounted () {
    api.list_computers().then(result => {
      this.computers = this.computers.concat(result.data)
    })
  },
  methods: {
    add_employee () {
      if (!this.adding_employee) {
        this.employees.push({name: ''})
        this.adding_employee = true
      }
    },
    add_employee_name (employee) {
      employee.name = this.new_name
      this.new_name = ''
      this.adding_employee = false
    },
    afterselection (employee) {
      this.$nextTick(() => {
        if (employee.computer === '') {
          employee.computer = null
        }
      })
    }
  }
}
</script>

<style scoped>
  .container-gaveta-soft-perms {
    display:flex;
    align-items: center;
  }
  .texto-gaveta {
    font-size: 15px;
    padding-top: 5px;
    padding-left: 2px;
    font-family: 'Quicksand' !important;
    text-transform: lowercase;
    font-weight: 700;
  }
  .table {
    height: 45px;
    position: relative;
  }
  .table-nome {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-flow: column wrap;
      width: 20%;
      margin-right: 5px;
  }
  .table-title {
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      width: 20%;
  }
  .table-title-logo {
      max-height: 45%;
      margin: 10px;
  }
  .table-title-text {
      font-weight: 300;
      font-size: 14px;
      color: #5B5B5B !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .table-title-text-nome {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      color: #5B5B5B;
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
  .slack-employee {
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
