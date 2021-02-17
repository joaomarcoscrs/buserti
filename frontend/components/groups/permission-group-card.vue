<template>
  <div>
    <v-card light class="ma-3 card" height="300" width="400" hover>
      <v-card-title class="card-title">{{ group.title }}</v-card-title>
      <v-card-subtitle class="flex-subtitle pt-4">
        <img class="pa-0 card-subtitle" src="~/static/padlock.png">
        <span class="pa-2 card-subtitle">permissões</span>
      </v-card-subtitle>
      <v-layout column class="container-grupo">
        <div @add-permission="add_permission" class="ma-0 pt-0 pb-1 pl-7 pr-7" v-for="permission in group.items" :key="permission.id">
          <v-layout justify-start>
            <span class="permission-text-refers" :class="permission.refers_to">{{ permission.refers_to }}</span>&nbsp;<span class="permission-text">{{ permission.level }}</span>
            <v-btn text icon x-small @click="remove_permission($event, permission)"><v-icon x-small>mdi-close</v-icon></v-btn>
          </v-layout>
        </div>
        <v-btn @click="open_permission_dialog($event)" text class="ml-5 cor-rosa-buser botao-add"><span style="font-size: 13px;">adicionar</span></v-btn>
      </v-layout>
    </v-card>
    <permissionDialog @add-permission="add_permission" :permissionList="permissionList" ref="permission_dialog" />
  </div>
</template>

<script>
import permissionDialog from '~/components/groups/permission-dialog.vue'

export default {
  components: {
    permissionDialog
  },
  props: ['group', 'permissionList'],
  data () {
    return {}
  },
  methods: {
    open_permission_dialog (evt) {
      this.$refs.permission_dialog.open(this.group, this.permissionList)
      evt.stopPropagation()
    },
    remove_permission (evt, permission) {
      this.group.items = this.group.items.filter(el => el.id !== permission.id)
    },
    add_permission (permission) {
      this.group.items.push(permission)
    }
  }
}
</script>

<style scoped>
  .card:hover {
      cursor: default;
  }
  .card-title {
      font-weight: 300;
      font-size: 24px;
      color: #5B5B5B;
  }
  .card-subtitle {
      font-weight: 300;
      font-size: 18px;
      color: #5B5B5B;
  }
  .permission-logo {
      height: 30px;
  }
  .card-subtitle {
      height: 30px;
      width: auto;
  }
  .flex-subtitle {
      display: flex;
      align-items: flex-start;
  }
  .botao-add {
    width: 100px;
  }
  .container-grupo {
      height: 200px;
      flex-flow: column wrap;
      padding-bottom: 10px;
      overflow-x: auto;
      overflow-y: hidden;
  }
  .permission-text {
      font-weight: 400;
      font-size: 12px;
  }
  .permission-text-refers {
      font-weight: 600;
      font-size: 12px;
      color: #5B5B5B;
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
</style>
