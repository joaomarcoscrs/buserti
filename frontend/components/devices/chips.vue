<template>
  <div>
    <v-layout class="my-3">
      <img class="table-title-logo mx-2" src="~/static/chip.png" />
      <h1
        class="table-title-text-nome"
        style="font-size: 30px; font-weight: 300"
      >
        chips
      </h1>
    </v-layout>
    <v-layout class="table mb-4 mx-3" align-center row-wrap justify-start>
      <div class="table-nome" style="height: 100%">
        <div class="table-slack" style="height: 100%">
          <h3
            class="table-title-text-nome"
            style="font-size: 16px; font-weight: 500"
          >
            ICCID
          </h3>
        </div>
      </div>
      <v-layout class="container-linha" justify-start align-center>
        <div class="table-title" style="height: 100%">
          <v-text-field
            class="table-title-text"
            style="font-size: 16px; font-weight: 400"
            disabled
            value="número"
            dense
            light
            hide-details
          />
        </div>
      </v-layout>
    </v-layout>
    <div class="overflow-box mx-3">
      <div v-for="chip in chips" :key="chip.id">
        <v-layout
          :class="chip.altura_linha"
          align-center
          row-wrap
          justify-start
        >
          <div v-if="chip.iccid" class="table-nome" style="height: 100%">
            <div class="table-slack" style="height: 100%">
              <h3 class="table-title-text-nome">{{ chip.iccid }}</h3>
            </div>
          </div>
          <v-layout
            v-if="chip.iccid"
            class="container-linha"
            justify-start
            align-center
          >
            <div class="table-title" style="height: 100%">
              <v-text-field
                v-if="chip.editing_phone_number && !chip.phonenumber_error"
                @change="editou_celular(chip)"
                @keyup.enter="editou_celular(chip)"
                class="table-title-text"
                placeholder="número"
                v-model="chip.phone_number"
                dense
                light
                hide-details
              />
              <v-text-field
                v-else-if="
                  chip.editing_phone_number &&
                  chip.phonenumber_error &&
                  chip.phonenumber_tem_letras
                "
                @change="editou_celular(chip)"
                @keyup.enter="editou_celular(chip)"
                class="table-title-text"
                placeholder="número"
                v-model="chip.phone_number"
                dense
                error
                hint="Digite apenas números"
                persistent-hint
                validate-on-blur
                light
              />
              <v-text-field
                v-else-if="
                  chip.editing_phone_number &&
                  chip.phonenumber_error &&
                  !chip.phonenumber_tem_11_digitos
                "
                @change="editou_celular(chip)"
                @keyup.enter="editou_celular(chip)"
                class="table-title-text"
                placeholder="número"
                v-model="chip.phone_number"
                dense
                error
                hint="Número não possui 11 dígitos"
                persistent-hint
                validate-on-blur
                light
              />
              <v-btn
                v-else
                text
                class="table-title-text-nome pa-0 ma-0"
                color="#4A4A4A"
                style="font-size: 12px; text-transform: lowercase"
                @click="editar_celular(chip)"
              >
                {{ chip.phone_number | celular }}</v-btn
              >
            </div>
          </v-layout>
          <v-layout v-if="!chip.iccid" class="table" justify-start align-center>
            <div class="table-nome ma-0 pa-0" style="height: 100%">
              <v-text-field
                class="table-title-text"
                placeholder="patrimônio"
                v-model="new_iccid_chip"
                dense
                light
                hide-details
                @change="add_chip_iccid(chip)"
              />
            </div>
          </v-layout>
        </v-layout>
        <v-divider color="#969696" class="mt-2 mb-2" />
      </div>
      <v-btn
        v-if="!adding_chip"
        class="mx-2"
        dark
        icon
        text
        @click="add_chip()"
      >
        <v-icon class="cor-cinza" dark size="27"> mdi-plus </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["chips"],
  data: () => ({
    selectedItem: null,
    adding_chip: false,
    new_iccid_chip: "",
  }),
  methods: {
    add_chip() {
      if (!this.adding_chip) {
        this.chips.push({ iccid: "" });
        this.adding_chip = true;
      }
    },
    add_chip_iccid(chip) {
      chip.iccid = this.new_iccid_chip;
      this.new_iccid_chip = "";
      this.adding_chip = false;
    },
    editar_celular(chip) {
      chip.editing_phone_number = true;
      const numero = chip.phone_number.toString();
      var reg = new RegExp("^[0-9]+$");
      if (!reg.test(numero)) {
        chip.phonenumber_error = true;
        chip.phonenumber_tem_letras = true;
        chip.altura_linha = "table-erro";
        return;
      }
      if (numero.length !== 11) {
        chip.phonenumber_error = true;
        chip.phonenumber_tem_11_digitos = false;
        chip.altura_linha = "table-erro";
        return;
      }
    },
    editou_celular(chip) {
      const numero = chip.phone_number.toString();
      var reg = new RegExp("^[0-9]+$");
      if (!reg.test(numero)) {
        chip.phonenumber_error = true;
        chip.phonenumber_tem_letras = true;
        chip.phonenumber_tem_11_digitos = true;
        chip.altura_linha = "table-erro";
        return;
      }
      if (numero.length !== 11) {
        chip.phonenumber_error = true;
        chip.phonenumber_tem_11_digitos = false;
        chip.phonenumber_tem_letras = false;
        chip.altura_linha = "table-erro";
        return;
      }
      chip.phonenumber_error = false;
      chip.phonenumber_tem_letras = false;
      chip.phonenumber_tem_11_digitos = true;
      chip.altura_linha = "table";
      chip.editing_phone_number = false;
    },
  },
  filters: {
    celular: function (value) {
      let ddd = value.slice(0, 2);
      let primeira_parte = value.slice(2, 7);
      let segunda_parte = value.slice(7);
      return "(" + ddd + ") " + primeira_parte + "-" + segunda_parte;
    },
  },
};
</script>

<style scoped>
.container-linha {
  width: 70px;
  margin-left: 5px;
  margin-right: 5px;
}
.texto-gaveta {
  font-size: 16px;
  font-weight: 400;
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
.table-erro {
  height: 45px;
  position: relative;
}
.table-nome {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column wrap;
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
  width: 100px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.slack-chip {
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
  height: 300px;
}
.table-title-logo {
  max-height: 30px;
  margin: 10px;
}
</style>
