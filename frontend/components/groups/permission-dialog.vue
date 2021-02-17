<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card light>
      <v-card-title class="card-title mb-1">adicionar permissão ao grupo {{group.title}}</v-card-title>
      <v-card-text class="pt-1 pb-0" v-for="permission in permissions_to_add" :key="permission.id">
        <v-btn text @click="add_permission_to_group(permission)">
          <span class="permission-text-refers" :class="permission.refers_to">{{ permission.refers_to }}</span>&nbsp;<span class="permission-text">{{ permission.level }}</span>
        </v-btn>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn class="blue--text darken-1" text @click="close()">fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      group: {},
      permissionList: []
    }
  },
  computed: {
    permissions_to_add () {
      const adicionar = this.permissionList.map(obj => !this.group.items.find(o => o.id === obj.id))
      const result = []
      for (let i = 0; i < adicionar.length; i++) {
        if (adicionar[i]) {
          result.push(this.permissionList[i])
        }
      }
      return result
    }
  },
  methods: {
    open (group, permissionList) {
      this.group = group
      this.permissionList = permissionList
      this.visible = true
    },
    close () {
      this.visible = false
    },
    add_permission_to_group (permission) {
      this.$emit('add-permission', permission)
    }
  }
}
</script>

<style scoped>
  .permission-logo-add {
      height: 30px;
  }
  .card-title {
      font-weight: 300 !important;
      font-size: 24px !important;
      color: #5B5B5B;
  }
  .permission-text {
      text-transform: lowercase;
      font-weight: 300;
      font-size: 16px;
  }
  .permission-text-refers {
      text-transform: lowercase;
      font-weight: 500;
      font-size: 16px;
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
