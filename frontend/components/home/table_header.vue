<template>
  <div>
    <v-layout justify-center align-start>
      <v-layout class="table" justify-space-around align-center>
        <v-autocomplete
          :items="employees"
          v-model="selected_employee"
          class="cor-cinza mx-5"
          dense
          color="#5B5B5B"
          hide-no-data
          hide-selected
          filled
          rounded
          item-color="white"
          light
          style="max-width: 18%; font-size: 14px; font-weight: 400"
          hide-details
          item-text="name"
          item-value="API"
          label="Procurar colaborador"
          prepend-inner-icon="mdi-magnify"
          return-object
          @change="select_employee()"
        ></v-autocomplete>
        <div class="table-title" style="height: 100%" v-if="!show_employee">
          <img class="table-title-logo" src="~/static/gmail.png" />
          <h3 class="table-title-text">e-mail</h3>
        </div>
        <div class="table-title" style="height: 100%" v-if="!show_employee">
          <img class="table-title-logo" src="~/static/other_devices.png" />
          <h3 class="table-title-text">devices</h3>
        </div>
        <div class="table-title" style="height: 100%" v-if="!show_employee">
          <img class="table-title-logo" src="~/static/software_icon.png" />
          <h3 class="table-title-text">softwares</h3>
        </div>
        <div class="table-title" style="height: 100%" v-if="!show_employee">
          <img class="table-title-logo" src="~/static/padlock.png" />
          <h3 class="table-title-text">permissões</h3>
        </div>
        <div v-if="!show_employee" class="save-icon"></div>
        <v-spacer v-else />
      </v-layout>
    </v-layout>
    <v-divider color="#969696" class="ml-5 mr-5 mt-2 mb-2" />
    <!-- color="#F11076" -->
    <v-card light v-if="show_employee" class="mx-5 my-3">
      <v-card-title
        style="
          font-family: 'Montserrat';
          text-transform: lowercase;
          font-size: 30px;
          font-weight: 300;
        "
        height="10%"
        class="pa-3 cor-branco fundo-cinza-buser"
      >
        {{ selected_employee.name }}
      </v-card-title>
      <v-card-text
        class="flex-card fundo-cinza-light"
        style="position: relative"
      >
        <div class="employee-avatar">
          <v-img class="avatar-photo" :src="selected_employee.slack_image">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <div class="infos">
          <div class="table-slack ma-2">
            <img class="slack-logo ma-2" src="~/static/gmail.png" />
            <v-text-field
              class="employee-card-text"
              style="font-size: 14px; color: white"
              v-model="selected_employee.buser_email"
              @change="edit_employee()"
              dense
              light
              hide-details
            />
          </div>
          <div class="table-slack ma-2">
            <img class="slack-logo ma-2" src="slack_logo.png" />
            <span class="employee-card-text">{{
              selected_employee.slack
            }}</span>
          </div>
          <div class="table-slack ma-2">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <img
                  class="slack-logo ma-2"
                  src="~/static/other_devices.png"
                  v-bind="attrs"
                  v-on="on"
                />
                <v-select
                  return-object
                  class="select-computer employee-card-text"
                  :items="computers"
                  v-model="selected_employee.device"
                  item-text="patrimonio"
                  placeholder="computador"
                  @input="afterselection()"
                  dense
                  hide-details
                />
              </template>
              <div v-if="selected_employee.device">
                <span
                  >Sistema Atual: {{ selected_employee.device.os_atual }}</span
                >
                <br />
                <span
                  >Sistema Original:
                  {{ selected_employee.device.os_original }}</span
                >
                <br />
                <span
                  >Garantia:
                  {{ selected_employee.device.garantia_expira }}</span
                >
                <br />
                <span
                  >Observações: {{ selected_employee.device.observacoes }}</span
                >
                <br />
                <span
                  >Tag de serviço:
                  {{ selected_employee.device.service_tag }}</span
                >
                <br />
              </div>
            </v-tooltip>
          </div>
        </div>
        <div class="software-permission">
          <div class="container">
            <h2 class="ma-4 subtitulo cor-cinza-buser">softwares</h2>
            <v-autocomplete
              width="100%"
              return-object
              :items="software_groups"
              class="select-group cor-rosa-buser"
              background-color="#ececec"
              v-model="selected_employee.software_groups"
              placeholder="Grupos"
              chips
              dense
              item-text="title"
              @change="add_software_group()"
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
                  @click:close="remove_software_group(data.item)"
                >
                  {{ data.item.title }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template>
                  <v-list dense>
                    <v-list-item-content>
                      <v-list-item-title
                        class="cor-branco"
                        style="font-size: 14px; font-weight: 400"
                        v-html="data.item.title"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list>
                </template>
              </template>
            </v-autocomplete>
            <div
              class="softwares my-2"
              style="
                display: flex;
                width: 100%;
                justify-content: center;
                flex-flow: row wrap;
              "
            >
              <div
                v-for="(software, index) in selected_employee.softwares"
                :key="index"
                class="ma-2"
              >
                <a @click="install_software(software)" style="display: flex"
                  ><img
                    class="software-logo"
                    :src="software.image"
                    v-bind:class="
                      !is_on_list(
                        software,
                        selected_employee.installed_softwares
                      )
                        ? 'not-installed'
                        : ''
                    "
                  />
                  <v-icon
                    small
                    color="green"
                    class="yes-no-icon"
                    v-if="
                      is_on_list(
                        software,
                        selected_employee.installed_softwares
                      )
                    "
                    >mdi-check</v-icon
                  >
                  <v-icon class="yes-no-icon" small v-else color="red"
                    >mdi-close</v-icon
                  ></a
                >
              </div>
            </div>
          </div>
          <div class="container">
            <h2 class="ma-4 subtitulo cor-cinza-buser">permissões</h2>
            <v-autocomplete
              return-object
              :items="permission_groups"
              class="select-group cor-cinza-escuro pa-0 ma-2"
              background-color="#ececec"
              v-model="selected_employee.permission_groups"
              placeholder="Grupos"
              chips
              style="width: 100%"
              item-text="title"
              @change="add_permission_group()"
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
                  @click:close="remove_permission_group(data.item)"
                >
                  {{ data.item.title }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template>
                  <v-list-item-content>
                    <v-list-item-title
                      class="cor-branco"
                      style="font-size: 14px; font-weight: 400"
                      v-html="data.item.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
            <div
              class="pa-0"
              style="
                display: flex;
                flex-flow: column wrap;
                max-height: 100%;
                justify-content: flex-start;
              "
            >
              <v-list-item
                v-for="(permission, index) in selected_employee.permissions"
                :key="index"
                class="list-permissions py-2"
                @click="give_permission(permission)"
                style="max-width: 180px"
              >
                <span :class="permission.refers_to">{{
                  permission.refers_to
                }}</span
                >&nbsp;<span class="employee-card-text">{{
                  permission.level
                }}</span>
                <v-icon
                  color="green"
                  small
                  style="margin-top: -15px"
                  v-if="
                    is_on_list(
                      permission,
                      selected_employee.acquired_permissions
                    )
                  "
                  >mdi-check</v-icon
                >
                <v-icon
                  small
                  style="margin-top: -15px"
                  @click="give_permission(permission)"
                  v-else
                  color="red"
                  >mdi-close</v-icon
                >
              </v-list-item>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="fundo-cinza-light">
        <v-spacer></v-spacer>
        <v-btn
          large
          class="cor-cinza-escuro"
          style="text-transform: lowercase; font-size: 18px; font-weight: 400"
          text
          @click="close_employee()"
        >
          Limpar Busca
          <v-icon right size="24"> mdi-close-circle </v-icon>
        </v-btn>
        <v-btn
          v-if="selected_employee.edited"
          @click="save()"
          text
          class="cor-cinza-escuro"
          style="text-transform: lowercase; font-size: 18px; font-weight: 400"
        >
          salvar alteraçẽs
          <v-icon right size="24" @click="save()">mdi-content-save</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider
      v-if="show_employee"
      color="#969696"
      class="ml-5 mr-5 mt-2 mb-2"
    />
  </div>
</template>

<script>
import api from "~api";
import employeehelper from "../../helpers/employees/employeehelper";

export default {
  props: ["employees"],
  data() {
    return {
      show_employee: false,
      selected_employee: null,
      state: employeehelper.state,
    };
  },
  computed: {
    computers() {
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
    select_employee() {
      this.show_employee = true;
      console.log(this.selected_employee);
    },
    close_employee() {
      this.show_employee = false;
      this.selected_employee = null;
    },
    is_on_list(elem, list) {
      if (list.find((e) => e.id === elem.id)) {
        return true;
      } else {
        return false;
      }
    },
    afterselection() {
      this.$nextTick(() => {
        if (this.selected_employee.computer === "") {
          this.selected_employee.computer = null;
        }
      });
      this.edit_employee();
    },
    install_software(software) {
      18 % employeehelper.install_software(software, this.selected_employee);
      this.edit_employee();
    },
    give_permission(permission) {
      employeehelper.give_permission(permission, this.selected_employee);
      this.edit_employee();
    },
    add_software_group() {
      employeehelper.add_software_group(this.selected_employee);
      this.edit_employee();
    },
    remove_software_group(item) {
      employeehelper.remove_software_group(item, this.selected_employee);
      this.edit_employee();
    },
    add_permission_group() {
      employeehelper.add_permission_group(this.selected_employee);
      this.edit_employee();
    },
    remove_permission_group(item) {
      employeehelper.remove_permission_group(item, this.selected_employee);
      this.edit_employee();
    },
    edit_employee() {
      if (!this.selected_employee.edited) {
        this.selected_employee.edited = true;
        this.selected_employee.state = this.state.MODIFIED;
        this.$store.commit("employees/increment");
      }
    },
    save() {
      this.selected_employee.state = this.state.LOADING;
      api.save_employee(this.selected_employee).then((response) => {
        if (response.status === 200) {
          this.selected_employee.edited = false;
          this.selected_employee.state = this.state.SAVED;
          this.$store.commit("employees/decrement");
        }
      });
    },
  },
};
</script>

<style scoped>
.table {
  height: 60px;
  position: relative;
}
.table-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19%;
}
.table-title-logo {
  max-height: 45%;
  margin: 10px;
}
.table-title-text {
  font-weight: 300;
  font-size: 24px;
  color: #5b5b5b;
}
.slack-logo {
  width: 22px;
  height: auto;
}
.flex-card {
  display: flex;
  flex-direction: row;
}
.table-slack {
  margin-top: 2px;
  width: 220px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
}
.employee-avatar {
  max-width: 15%;
  min-width: 250px !important;
}
.infos {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.softwares {
  display: inline;
  width: 25%;
}
.permissions {
  width: 25%;
}
.software-logo {
  height: 30px;
  margin: 5px;
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
.list-permissions {
  min-height: 20px;
  height: 20px;
}
.not-installed {
  opacity: 50%;
}
.select-group {
  width: 90%;
  margin: 0 5% 0 5% !important;
  justify-content: center;
  align-items: center;
}
.avatar-photo {
  border-radius: 50%;
  margin: 10%;
}
.software-permission {
  position: relative;
  display: flex;
  width: 70%;
  max-height: 400px;
  align-content: center;
  text-align: center;
}
.select-computer {
  flex-grow: 1;
}
.subtitulo {
  font-weight: 300;
  font-size: 24px;
}
.save-icon {
  width: 5%;
  display: flex;
  justify-content: center;
}
.yes-no-icon {
  align-self: flex-start;
}
.container {
  height: 100%;
  position: relative;
  max-width: 50%;
  margin-left: 4px;
  margin-right: 4px;
}
.employee-card-text {
  font-size: 14px;
  color: #424242 !important;
  font-weight: 300;
}
</style>
