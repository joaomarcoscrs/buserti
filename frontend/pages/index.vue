<template>
  <div>
    <tableHeader :employees="employees" />
    <employeesTable :employees="employees" class="ml-5 mr-5" />
  </div>
</template>

<script>
import tableHeader from "~/components/home/table_header.vue";
import employeesTable from "~/components/home/table.vue";
import api from "~api";

export default {
  components: {
    employeesTable,
    tableHeader,
  },
  data() {
    return {};
  },
  asyncData() {
    return api.list_employees().then((result) => {
      if (result.data) {
        result.data.forEach(element => {
          element.state = 0 // state = NONE | sem modificação
          element.edited = false // não editado
          element.softwares = [];
          element.software_groups.forEach((group) => {
              element.softwares = element.softwares.concat(group.items);
          });
          element.softwares = element.softwares.filter(
              (software, index, self) =>
                  index === self.findIndex((s) => s.id === software.id)
          );
          element.permissions = [];
          element.permission_groups.forEach((group) => {
              element.permissions = element.permissions.concat(group.items);
          });
          element.permissions = element.permissions.filter(
              (permission, index, self) =>
                  index === self.findIndex((s) => s.id === permission.id)
          );
        });
      }
      return {
        employees: result.data,
      };
    });
  },
  beforeRouteLeave (to, from , next) {
    if (this.edit_count > 0) {
      const answer = window.confirm('Deseja sair? Existem alterações não salvas!')
      if (answer) {
        this.$store.commit('employees/clear_count')
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  },
  mounted() {
    api.list_devices().then((result) => {
      this.computers = result.data.filter((d) => d.kind === "computer");
      this.cellphones = result.data.filter((d) => d.kind === "cellphone");
      this.other_devices = result.data.filter(
        (d) =>
          d.kind !== "computer" && d.kind !== "cellphone" && d.kind !== "chip"
      );
      const chips = result.data.filter((d) => d.kind === "chip");
      var i;
      for (i = 0; i < chips.length; i++) {
        chips[i]["phonenumber_error"] = false;
        chips[i]["phonenumber_tem_letras"] = false;
        chips[i]["phonenumber_tem_11_digitos"] = false;
        chips[i]["editing_phone_number"] = false;
        chips[i]["altura_linha"] = "table";
      }
      this.chips = chips;
      this.$store.commit("devices/setdevices", {
        computers: this.computers,
        cellphones: this.cellphones,
        other_devices: this.other_devices,
        chips: this.chips
      });
    });
    api.list_software_groups().then((result) => {
      this.$store.commit("groups/setSoftwareGroups", result.data);
    });
    api.list_permission_groups().then((result) => {
      this.$store.commit("groups/setPermissionGroups", result.data);
    });
  },
  computed: {
    edit_count() {
      return this.$store.state.employees.edit_count;
    },
  }
};
</script>

<style scoped>
</style>
