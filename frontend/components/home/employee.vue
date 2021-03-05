<template>
  <div>
    <div v-for="employee in employees" :key="employee.id">
      <v-layout class="table" align-center row-wrap>
        <div v-if="employee.name" class="table-nome" style="height: 100%">
          <div class="table-slack" style="height: 100%">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar color="indigo" class="avatar" size="36">
                  <img :src="employee.slack_image" v-bind="attrs" v-on="on" />
                </v-avatar>
              </template>
              <span>slack: {{ employee.slack }}</span>
            </v-tooltip>
            <h3 class="table-title-text-nome">{{ employee.name }}</h3>
          </div>
        </div>
        <v-layout
          v-if="employee.name"
          class="table"
          justify-space-between
          align-center
        >
          <div class="table-title" style="height: 100%">
            <v-text-field
              class="table-title-text"
              full-width
              placeholder="email"
              v-model="employee.buser_email"
              @change="edit_employee(employee)"
              filled
              rounded
              dense
              light
              hide-details
            />
          </div>
          <div class="table-title" style="height: 100%">
            <!-- <v-select
              class="table-title-text"
              :items="devices.computers"
              v-model="employee.device"
              item-text="patrimonio"
              placeholder="computador"
              @input="afterselection(employee)"
              filled
              rounded
              dense
              light
              hide-details
              solo
            /> -->
            <div class="text-center">
              <v-menu
                offset-y
                :close-on-content-click="false"
                class="gaveta"
                max-width="600"
                min-width="600"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="container-gaveta-soft-perms cor-cinza-escuro"
                    light
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span class="texto-gaveta">ver dispositivos</span>
                  </v-btn>
                </template>
                <select-devices :devices="devices" :employee="employee"/>
              </v-menu>
            </div>
          </div>
          <div class="table-title" style="height: 100%">
            <div class="text-center">
              <v-menu
                offset-y
                :close-on-content-click="false"
                class="gaveta"
                max-height="300"
                max-width="400"
                min-width="400"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="container-gaveta-soft-perms cor-cinza-escuro"
                    light
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span class="texto-gaveta">ver softwares</span>
                  </v-btn>
                </template>
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
                    softwares e licenças
                  </div>
                  <div class="fundo-branco">
                    <v-autocomplete
                      return-object
                      :items="software_groups"
                      item-color="pink lighten-1"
                      class="select-group"
                      filled
                      v-model="employee.software_groups"
                      placeholder="Grupos"
                      chips
                      light
                      background-color="white"
                      solo
                      item-text="title"
                      @change="add_software_group(employee)"
                      item-value="title"
                      multiple
                      hide-details
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          color="#5B5B5B"
                          small
                          text-color="white"
                          close
                          @click="data.select"
                          @click:close="
                            remove_software_group(data.item, employee)
                          "
                        >
                          {{ data.item.title }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template>
                          <v-list-item-content>
                            <v-list-item-title
                              class="cor-branco"
                              v-html="data.item.title"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                    <v-list light class="software-list">
                      <div
                        v-for="software in employee.softwares"
                        :key="software.id"
                        class="software-item ma-2"
                      >
                        <div class="software-logo">
                          <a
                            ><img
                              class="logo"
                              v-bind:class="
                                !is_on_list(
                                  software,
                                  employee.installed_softwares
                                )
                                  ? 'not-installed'
                                  : ''
                              "
                              :src="software.image"
                              @click="install_software(software, employee)"
                          /></a>
                        </div>
                        <v-icon
                          small
                          color="green"
                          class="installed-icon"
                          v-if="
                            is_on_list(software, employee.installed_softwares)
                          "
                          >mdi-check</v-icon
                        >
                        <v-icon small v-else color="red" class="installed-icon"
                          >mdi-close</v-icon
                        >
                        <!-- <v-btn @click="install_software(software, employee)" ><v-icon v-if="!is_on_list(software, employee.installed_softwares)">mdi-close</v-icon></v-btn> -->
                      </div>
                    </v-list>
                  </div>
                </div>
              </v-menu>
            </div>
          </div>
          <div class="table-title" style="height: 100%">
            <div class="text-center">
              <v-menu
                offset-y
                :close-on-content-click="false"
                class="gaveta"
                max-height="300"
                max-width="400"
                min-width="400"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    color="#5B5B5B"
                    class="container-gaveta-soft-perms"
                    light
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span class="texto-gaveta">ver permissões</span>
                  </v-btn>
                </template>
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
                    permissões
                  </div>
                  <div class="fundo-branco">
                    <v-autocomplete
                      return-object
                      :items="permission_groups"
                      class="select-group"
                      filled
                      item-color="pink lighten-1"
                      v-model="employee.permission_groups"
                      placeholder="Grupos"
                      chips
                      light
                      background-color="white"
                      solo
                      item-text="title"
                      @change="add_permission_group(employee)"
                      item-value="title"
                      multiple
                      hide-details
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          color="#5B5B5B"
                          small
                          text-color="white"
                          close
                          @click="data.select"
                          @click:close="
                            remove_permission_group(data.item, employee)
                          "
                        >
                          {{ data.item.title }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <template>
                          <v-list-item-content>
                            <v-list-item-title
                              class="cor-branco"
                              v-html="data.item.title"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                    <v-list light>
                      <v-list-item
                        v-for="(permission, index) in employee.permissions"
                        :key="index"
                        class="permission-list ma-2"
                      >
                        <a @click="give_permission(permission, employee)"
                          ><span
                            class="permission-text-refers"
                            :class="permission.refers_to"
                            >{{ permission.refers_to }}</span
                          >&nbsp;<span class="permission-text">{{
                            permission.level
                          }}</span>
                          <v-icon
                            small
                            style="margin-top: -15px"
                            color="green"
                            v-if="
                              is_on_list(
                                permission,
                                employee.acquired_permissions
                              )
                            "
                            >mdi-check</v-icon
                          >
                          <v-icon
                            small
                            style="margin-top: -15px"
                            v-else
                            color="red"
                            >mdi-close</v-icon
                          >
                        </a>
                      </v-list-item>
                    </v-list>
                  </div>
                </div>
              </v-menu>
            </div>
          </div>
        </v-layout>
        <v-layout
          v-if="!employee.name"
          class="table"
          justify-space-between
          align-center
        >
          <div class="table-nome" style="height: 100%">
            <v-text-field
              class="table-title-text"
              full-width
              placeholder="nome"
              filled
              v-model="new_name"
              rounded
              dense
              light
              hide-details
              @change="add_employee_name(employee)"
            />
          </div>
        </v-layout>
        <div class="save-icon">
          <a
            ><v-icon
              v-if="employee.state == state.MODIFIED"
              @click.native="save_one(employee)"
              class="cor-cinza-buser"
              >mdi-content-save</v-icon
            ></a
          >
          <v-progress-circular
            v-if="employee.state == state.LOADING"
            indeterminate
            color="primary"
          ></v-progress-circular>
          <v-icon v-if="employee.state == state.SAVED" color="green"
            >mdi-check</v-icon
          >
        </div>
      </v-layout>
      <v-divider color="#969696" class="mt-2 mb-2" />
    </div>
    <div class="actions">
      <v-btn
        v-if="!adding_employee"
        class="mx-2"
        light
        icon
        text
        @click="add_employee()"
      >
        <v-icon class="cor-cinza-buser" light size="27">
          mdi-account-plus
        </v-icon>
      </v-btn>
      <v-btn class="ma-2" text v-if="edit_count > 0" @click="save_all()"
        ><span
          class="texto-gaveta ma-2 cor-cinza-buser"
          style="font-weight: 300; font-size: 20px"
          >salvar todas as alterações</span
        ><v-icon size="26" class="cor-cinza-buser"
          >mdi-content-save-all</v-icon
        ></v-btn
      >
    </div>
  </div>
</template>

<script>
import api from "~api";
import selectDevices from '../devices/select-devices.vue'
import employeehelper from "./../../helpers/employees/employeehelper"

export default {
  props: ["employees"],
  components: {
    selectDevices
  },
  data() {
    return {
      new_name: "",
      adding_employee: false,
      something_edited: false,
      state: employeehelper.state,
    };
  },
  computed: {
    devices() {
      return this.$store.state.devices.devices;
    },
    software_groups() {
      return this.$store.state.groups.software_groups;
    },
    permission_groups() {
      return this.$store.state.groups.permission_groups;
    },
    edit_count() {
      return this.$store.state.employees.edit_count;
    },
  },
  methods: {
    add_employee() {
      if (!this.adding_employee) {
        this.employees.push({
          name: "",
          device: null,
          software_groups: [],
          permission_groups: [],
          softwares: [],
          permissons: [],
          installed_softwares: [],
          acquired_permissions: [],
          state: 0,
        });
        this.adding_employee = true;
      }
    },
    add_employee_name(employee) {
      employee.name = this.new_name;
      this.new_name = "";
      this.adding_employee = false;
    },
    afterselection(employee) {
      this.$nextTick(() => {
        if (employee.device === "") {
          employee.device = null;
        }
      });
      this.edit_employee(employee);
    },
    is_on_list(elem, list) {
      if (list.find((e) => e.id === elem.id)) {
        return true;
      } else {
        return false;
      }
    },
    install_software(software, employee) {
      employeehelper.install_software(software, employee);
      this.edit_employee(employee);
    },
    give_permission(permission, employee) {
      employeehelper.give_permission(permission, employee);
      this.edit_employee(employee);
    },
    add_software_group(employee) {
      employeehelper.add_software_group(employee);
      this.edit_employee(employee);
    },
    remove_software_group(item, employee) {
      employeehelper.remove_software_group(item, employee);
      this.edit_employee(employee);
    },
    add_permission_group(employee) {
      employeehelper.add_permission_group(employee);
      this.edit_employee(employee);
    },
    remove_permission_group(item, employee) {
      employeehelper.remove_permission_group(item, employee);
      this.edit_employee(employee);
    },
    save_all() {
      this.employees.forEach((employee) => {
        if (employee.edited) {
          employee.state = this.state.LOADING;
          api.save_employee(employee).then((response) => {
            if (response.status === 200) {
              employee.edited = false;
              employee.state = this.state.SAVED;
              this.$store.commit("employees/decrement");
            }
          });
        }
      });
      this.something_edited = false;
    },
    save_one(employee) {
      employee.state = this.state.LOADING;
      api.save_employee(employee).then((response) => {
        if (response.status === 200) {
          employee.edited = false;
          employee.state = this.state.SAVED;
          this.$store.commit("employees/decrement");
        }
      });
    },
    edit_employee(employee) {
      if (!employee.edited) {
        employee.edited = true;
        employee.state = this.state.MODIFIED;
        this.$store.commit("employees/increment");
      }
    },
  },
};
</script>

<style scoped>
.container-gaveta-soft-perms {
  display: flex;
  align-items: center;
}
.texto-gaveta {
  font-size: 15px;
  font-family: "Quicksand" !important;
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
  color: #5b5b5b !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-title-text-nome {
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  color: #5b5b5b;
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
.permission-text {
  font-weight: 400;
  font-size: 12px;
  color: #5b5b5b;
}
.permission-text-refers {
  font-weight: 500;
  font-size: 12px;
}
.staff {
  color: #5d2085;
}
.metabase {
  color: #207685;
}
.powerbi {
  color: #bda000;
}
.permission-list {
  display: flex;
  justify-content: space-between;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.save-icon {
  width: 5%;
  display: flex;
  justify-content: center;
}
.avatar {
  margin-right: 5px;
}
</style>
