<template>
  <div>
    <v-layout justify-center align-start>
      <v-layout class="table" justify-space-around align-center>
          <v-spacer />
        <div class="table-title" style="height: 100%;">
          <img class="table-title-logo" src="~/static/slack_logo.png">
          <h3 class="table-title-text">slack</h3>
        </div>
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
  </div>
</template>

<script>

export default {
  data () {
    return {}
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
      width: 18%;
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
</style>
