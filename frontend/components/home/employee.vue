<template>
  <div>
    <v-layout class="table" align-center v-for="employee in employees" :key="employee.id">
      <div v-if="employee.name" class="table-nome" style="height: 100%;">
        <h3 class="table-title-text-nome">{{employee.name}}</h3>
      </div>
      <v-layout v-if="employee.name" class="table" justify-space-between align-center>
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
            <v-menu offset-y :close-on-content-click="false" class="gaveta" max-height="300" max-width="400" min-width="400">
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
              <!-- <v-list light>
                <v-list-item
                  v-for="(software_group) in employee.software_groups"
                  :key="software_group.id"
                >
                  <v-list-item-title>{{ software_group.name }}</v-list-item-title>
                </v-list-item>
              </v-list> -->
              <div class="gaveta">
                <div class="fundo-rosa-buser title-gaveta">
                  softwares e licenças
                </div>
                <div class="fundo-branco">
                  <!-- <v-select
                    return-object
                    :items="groups"
                    v-model="employee.software_groups"
                    attach
                    item-text="title"
                    @change="add_group(employee)"
                    chips
                    solo
                    label="Grupos"
                    multiple
                  ></v-select> -->
                  <v-autocomplete
                    return-object
                    :items="groups"
                    class="select-group"
                    filled
                    v-model="employee.software_groups"
                    placeholder="Grupos"
                    chips
                    solo
                    color="blue-grey lighten-2"
                    item-text="title"
                    @change="add_group(employee)"
                    item-value="title"
                    multiple
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="remove_group(data.item, employee)"
                      >
                        {{ data.item.title }}
                      </v-chip>
                    </template>
                    <template v-slot:item="data">
                      <template>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.title"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </template>
                  </v-autocomplete>
                  <v-list light class="software-list">
                    <div v-for="(software) in employee.softwares" :key="software.id" class="software-item">
                      <div class="software-logo" ><a><img class="logo" v-bind:class=" !is_on_list(software, employee.installed_softwares) ? 'not-installed' : '' " :src="software.image" @click="install_software(software, employee)"></a></div>
                      <v-icon small color="green" class="installed-icon" v-if="is_on_list(software, employee.installed_softwares)">mdi-check</v-icon>
                      <v-icon small v-else color="red" class="installed-icon">mdi-close</v-icon>
                      <!-- <v-btn @click="install_software(software, employee)" ><v-icon v-if="!is_on_list(software, employee.installed_softwares)">mdi-close</v-icon></v-btn> -->
                    </div>
                  </v-list>
                </div>
              </div>
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
    <v-btn
      v-if="!adding_employee"
      class="mx-2"
      dark
      text
      @click="add_employee()"
      color="transparent"
    >
      <v-icon class="cor-rosa-buser" dark large>
        mdi-plus
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
      computers: [''],
      groups: [],
      permissions: []
    }
  },
  mounted () {
    api.list_computers().then(result => {
      this.computers = this.computers.concat(result.data)
    })
    api.list_software_groups().then(result => {
      this.groups = result.data
    })
     api.list_permission_groups().then(result => {
      this.permissions = result.data
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
    },
    add_group (employee) {
      employee.softwares = []
      employee.software_groups.forEach(group => {
        employee.softwares = employee.softwares.concat(group.items)
      })
      employee.softwares = employee.softwares.filter((software, index, self) => index === self.findIndex((s) => (s.id === software.id)))
    },
    is_on_list (elem, list) {
      if (list.find((e) => (e.id === elem.id))) {
        return true
      } else {
        return false
      }
    },
    install_software (software, employee) {
      const index = (employee.installed_softwares.findIndex((e) => (e.id === software.id)))
      if (index === -1) {
        employee.installed_softwares.push(software)
      } else {
        employee.installed_softwares.splice(index, 1)
      }
    },
    remove_group(item, employee) {
      const index = (employee.software_groups.findIndex((e) => (e.id === item.id)))
      if (index >= 0) employee.software_groups.splice(index, 1)
      employee.softwares = []
      employee.software_groups.forEach(group => {
        employee.softwares = employee.softwares.concat(group.items)
      })
      employee.softwares = employee.softwares.filter((software, index, self) => index === self.findIndex((s) => (s.id === software.id)))
    },
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
      color: #5B5B5B !important;
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

  .software-logo {
      height: 30px;
  }

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

  .software-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
  }

  .software-item {
    padding: 0px 10px;
    align-items: flex-start;
    display: flex;
    height: 30px;
  }

  .select-group {
    color: black;
  }

  .not-installed {
    opacity: 50%;
  }

  .installed-icon {
    padding-bottom: 20px;
  }

  .logo {
    height: 100%;
  }

</style>
