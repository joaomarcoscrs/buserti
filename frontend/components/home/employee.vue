<template>
  <div>
    <v-layout class="table" align-center v-for="employee in employees" :key="employee.id">
      <div class="table-nome" style="height: 100%;">
        <h3 class="table-title-text-nome">{{employee.name}}</h3>
      </div>
      <v-layout class="table" justify-space-between align-center>
        <div class="table-title" style="height: 100%;">
          <v-text-field class="table-title-text"
                        full-width
                        placeholder="slack"
                        v-model="employee.slack"
                        filled
                        rounded
                        dense
                        light
                        hide-details
          />
        </div>
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
          <v-text-field class="table-title-text"
                        full-width
                        placeholder="Computador"
                        v-model="employee.computer"
                        filled
                        rounded
                        dense
                        light
                        hide-details
          />
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
    </v-layout>
    <v-divider color="#969696" class="mt-2 mb-2" />
  </div>
</template>

<script>

export default {
  props: ['employees'],
  data () {
    return {
    }
  },
  mounted () {
    console.log('RESULT: ', this.employees)
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
    height: 35px;
    position: relative;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  .table-nome {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 14%;
      margin-right: 10px;
  }
  .table-title {
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      width: 15%;
  }
  .table-title-logo {
      max-height: 45%;
      margin: 10px;
  }
  .table-title-text {
      font-weight: 400;
      font-size: 14px;
      color: #5B5B5B;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .table-title-text-nome {
      font-weight: 500;
      font-size: 16px;
      color: #5B5B5B;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
</style>
