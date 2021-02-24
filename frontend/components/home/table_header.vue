<template>
  <div>
    <v-layout justify-center align-start>
      <v-layout class="table" justify-space-around align-center>
        <v-autocomplete
          :items="employees"
          :search-input.sync="search"
          v-model="selected_employee"
          color="white"
          hide-no-data
          hide-selected
          filled
          rounded
          dense
          light
          style="width: 200px;"
          hide-details
          item-text="name"
          item-value="API"
          label="Pesquisar Colaborador"
          prepend-icon="mdi-database-search"
          return-object
          @change="select_employee()"
        ></v-autocomplete>
        <div class="table-title" style="height: 100%;">
          <img class="table-title-logo" src="~/static/gmail.png">
          <h3 class="table-title-text">e-mail</h3>
        </div>
        <div class="table-title" style="height: 100%;">
          <img class="table-title-logo" src="~/static/laptop.png">
          <h3 class="table-title-text">computador</h3>
        </div>
        <div class="table-title" style="height: 100%;">
          <img class="table-title-logo" src="~/static/software_icon.png">
          <h3 class="table-title-text">softwares</h3>
        </div>
        <div class="table-title" style="height: 100%;">
          <img class="table-title-logo" src="~/static/padlock.png">
          <h3 class="table-title-text">permissões</h3>
        </div>
      </v-layout>
    </v-layout>
    <v-divider color="#969696" class="ml-5 mr-5 mt-2 mb-2" />
    <v-card v-if="show_employee">
      <v-card-title>
        {{selected_employee.name}}
      </v-card-title>
      <v-card-text class="flex-card">
        <div class="infos">
          <div class="table-slack">
            <img class="slack-logo ma-2" src="~/static/gmail.png">
            <span>{{selected_employee.buser_email}}</span>
          </div>
          <div class="table-slack">
            <img class="slack-logo ma-2" src="slack_logo.png">
            <span>{{selected_employee.slack}}</span>
          </div>
          <div class="table-slack">
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <img class="slack-logo ma-2" src="~/static/laptop.png" v-bind="attrs" v-on="on">
                  <span v-if="selected_employee.computer">{{selected_employee.computer.patrimonio}}</span>
                </template>
                <div v-if="selected_employee.computer">
                  <span>{{selected_employee.computer._str}}</span> <br />
                  <span>Sistema Atual: {{selected_employee.computer.os_atual}}</span> <br />
                  <span>Sistema Original: {{selected_employee.computer.os_original}}</span> <br />
                  <span>Garantia: {{selected_employee.computer.garantia_expira}}</span> <br />
                  <span>Observações: {{selected_employee.computer.observacoes}}</span> <br />
                  <span>Tag de serviço: {{selected_employee.computer.service_tag}}</span> <br />
                </div>
              </v-tooltip>
          </div>
        </div>
        <div style="width: 30%">
          <h2>Softwares</h2>
          <v-autocomplete
            return-object
            :items="software_groups"
            class="select-group"
            filled
            v-model="selected_employee.software_groups"
            placeholder="Grupos"
            chips
            solo
            color="blue-grey lighten-2"
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
                close
                @click="data.select"
                @click:close="remove_software_group(data.item)"
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
          <div class="softwares">
            <div style="display: inline-block;" v-for="(software,index) in selected_employee.softwares" :key="index">
              <a><img class="software-logo" @click="install_software(software)" :src="software.image" v-bind:class=" !is_on_list(software, selected_employee.installed_softwares) ? 'not-installed' : '' "/></a>
              <v-icon small color="green" v-if="is_on_list(software, selected_employee.installed_softwares)">mdi-check</v-icon>
              <v-icon small v-else color="red">mdi-close</v-icon>
            </div>
          </div>
        </div>
        <div style="width: 30%">
          <h2>Permissions</h2>
          <v-autocomplete
            return-object
            :items="permission_groups"
            class="select-group"
            filled
            v-model="selected_employee.permission_groups"
            placeholder="Grupos"
            chips
            solo
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
                    v-html="data.item.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete>
          <v-list-item v-for="(permission, index) in selected_employee.permissions" :key="index" class="list-permissions">
            <span class="permission-text-refers" :class="permission.refers_to">{{ permission.refers_to }}</span>&nbsp;<span class="permission-text">{{ permission.level }}</span>
            <v-icon @click="give_permission(permission)" color="green" v-if="is_on_list(permission, selected_employee.acquired_permissions)">mdi-check</v-icon>
            <v-icon @click="give_permission(permission)" v-else color="red" >mdi-close</v-icon>
          </v-list-item>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="grey darken-3"
          @click="close_employee()"
        >
          Clear
          <v-icon right>
            mdi-close-circle
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider v-if="show_employee" color="#969696" class="ml-5 mr-5 mt-2 mb-2" />
  </div>
</template>

<script>
import api from "~api";

export default {
  props: ['employees'],
  data () {
    return {
      show_employee: false,
      selected_employee: null,
      computers: [""],
      software_groups: [],
      permission_groups: [],
    }
  },
  mounted() {
    api.list_computers().then((result) => {
      this.computers = this.computers.concat(result.data);
    });
    api.list_software_groups().then((result) => {
      this.software_groups = result.data;
    });
    api.list_permission_groups().then((result) => {
      this.permission_groups = result.data;
    });
  },
  methods: {
    select_employee () {
      this.show_employee = true
      console.log(this.selected_employee)
    },
    close_employee () {
      this.show_employee = false
      this.selected_employee = null
    },
    is_on_list(elem, list) {
      if (list.find((e) => e.id === elem.id)) {
        return true;
      } else {
        return false;
      }
    },
    install_software(software) {
      const index = this.selected_employee.installed_softwares.findIndex(
        (e) => e.id === software.id
      );
      if (index === -1) {
        this.selected_employee.installed_softwares.push(software);
      } else {
        this.selected_employee.installed_softwares.splice(index, 1);
      }
    },
    give_permission(permission) {
      const index = this.selected_employee.acquired_permissions.findIndex(
        (e) => e.id === permission.id
      );
      if (index === -1) {
        this.selected_employee.acquired_permissions.push(permission);
      } else {
        this.selected_employee.acquired_permissions.splice(index, 1);
      }
    },
    add_software_group() {
      this.selected_employee.softwares = [];
      this.selected_employee.software_groups.forEach((group) => {
        this.selected_employee.softwares = this.selected_employee.softwares.concat(group.items);
      });
      this.selected_employee.softwares = this.selected_employee.softwares.filter(
        (software, index, self) =>
          index === self.findIndex((s) => s.id === software.id)
      );
    },
    remove_software_group(item) {
      const index = this.selected_employee.software_groups.findIndex((e) => e.id === item.id);
      if (index >= 0) this.selected_employee.software_groups.splice(index, 1);
      this.selected_employee.softwares = [];
      this.selected_employee.software_groups.forEach((group) => {
        this.selected_employee.softwares = this.selected_employee.softwares.concat(group.items);
      });
      this.selected_employee.softwares = this.selected_employee.softwares.filter(
        (software, index, self) =>
          index === self.findIndex((s) => s.id === software.id)
      );
    },
    add_permission_group() {
      this.selected_employee.permissions = [];
      this.selected_employee.permission_groups.forEach((group) => {
        this.selected_employee.permissions = this.selected_employee.permissions.concat(group.items);
      });
      this.selected_employee.permissions = this.selected_employee.permissions.filter(
        (permission, index, self) =>
          index === self.findIndex((s) => s.id === permission.id)
      );
    },
    remove_permission_group(item) {
      const index = this.selected_employee.permission_groups.findIndex((e) => e.id === item.id);
      if (index >= 0) this.selected_employee.permission_groups.splice(index, 1);
      this.selected_employee.permissions = [];
      this.selected_employee.permission_groups.forEach((group) => {
        this.selected_employee.permissions = this.selected_employee.permissions.concat(group.items);
      });
      this.selected_employee.permissions = this.selected_employee.permissions.filter(
        (permission, index, self) =>
          index === self.findIndex((s) => s.id === permission.id)
      );
    }
  }
}
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
      width: 20.5%;
  }
  .table-title-logo {
      max-height: 45%;
      margin: 10px;
  }
  .table-title-text {
      font-weight: 300;
      font-size: 24px;
      color: #5B5B5B;
  }
  .slack-logo {
    height: 18px;
    width: auto;
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
  .infos {
    width: 40%;
    display: flex;
    flex-direction: column;
  }
  .softwares {
    display: inline;
    width: 30%;
  }
  .permissions {
    width: 30%;
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
</style>
