<template>
  <v-app-bar class="fundo-rosa-buser cor-branco" light fixed app clipped-right>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <img class="logo-buser ml-3 mr-10" src="~/static/buser_logo.png" />

    <v-btn
      v-if="currentRoute == 'index'"
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'index' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-rosa-escuro">mdi-home</v-icon>
      <span class="texto-toolbar cor-rosa-escuro">home</span>
    </v-btn>
    <v-btn
      v-else
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'index' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-branco">mdi-home</v-icon>
      <span class="texto-toolbar cor-branco">home</span>
    </v-btn>
    <v-btn
      v-if="currentRoute == 'grupos_softwares'"
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'grupos_softwares' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-rosa-escuro"
        >mdi-folder-download</v-icon
      >
      <span class="texto-toolbar cor-rosa-escuro">grupos & softwares</span>
    </v-btn>
    <v-btn
      v-else
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'grupos_softwares' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-branco"
        >mdi-folder-download</v-icon
      >
      <span class="texto-toolbar cor-branco">grupos & softwares</span>
    </v-btn>

    <v-btn
      v-if="currentRoute == 'grupos_permissoes'"
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'grupos_permissoes' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-rosa-escuro">
        mdi-folder-key</v-icon
      >
      <span class="texto-toolbar cor-rosa-escuro">grupos & permissões</span>
    </v-btn>
    <v-btn
      v-else
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'grupos_permissoes' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-branco">mdi-folder-key</v-icon>
      <span class="texto-toolbar cor-branco">grupos & permissões</span>
    </v-btn>

    <v-btn
      v-if="currentRoute == 'devices'"
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'grupos_permissoes' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-rosa-escuro">mdi-devices</v-icon>
      <span class="texto-toolbar cor-rosa-escuro">devices</span>
    </v-btn>
    <v-btn
      v-else
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'devices' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-branco">mdi-devices</v-icon>
      <span class="texto-toolbar cor-branco">devices</span>
    </v-btn>

    <v-btn
      v-if="currentRoute == 'softwares'"
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'softwares' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-rosa-escuro"
        >mdi-cloud-download</v-icon
      >
      <span class="texto-toolbar cor-rosa-escuro">softwares</span>
    </v-btn>
    <v-btn
      v-else
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'softwares' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-branco">mdi-cloud-download</v-icon>
      <span class="texto-toolbar cor-branco">softwares</span>
    </v-btn>

    <v-btn
      v-if="currentRoute == 'permissoes'"
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'permissoes' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-rosa-escuro"
        >mdi-monitor-lock</v-icon
      >
      <span class="texto-toolbar cor-rosa-escuro">permissões</span>
    </v-btn>
    <v-btn
      v-else
      text
      color="#F11076"
      class="container-pages-toolbar"
      :to="{ name: 'permissoes' }"
    >
      <v-icon size="30" class="mx-1 my-0 cor-branco">mdi-monitor-lock</v-icon>
      <span class="texto-toolbar cor-branco">permissões</span>
    </v-btn>

    <v-spacer />
    <v-btn
      v-if="!logged_user"
      text
      dark
      ripple
      class="ma-0 ml-5"
      @click="open_login_dialog($event)"
      >Login</v-btn
    >
    <!-- <template v-slot:activator="{ on }"><v-btn v-on="on"> -->
    <v-menu v-if="logged_user" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="ma-0 ml-5">
          <v-avatar size="36px">
            <img
              src="https://graph.facebook.com/4/picture?width=300&height=300"
            />
          </v-avatar>
        </v-btn>
      </template>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar>
                <img
                  src="https://graph.facebook.com/4/picture?width=300&height=300"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                >{{ logged_user.first_name }}
                {{ logged_user.last_name }}</v-list-item-title
              >
              <v-list-item-subtitle>{{
                logged_user.email
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <login-dialog ref="login_dialog" />
  </v-app-bar>
</template>

<script>
import loginDialog from "~/components/login-dialog.vue";
import Snacks from "~/helpers/Snacks.js";
import api from "~api";

export default {
  components: {
    loginDialog,
  },
  computed: {
    logged_user() {
      return this.$store.state.auth.currentUser;
    },
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    open_login_dialog(evt) {
      this.$refs.login_dialog.open();
      evt.stopPropagation();
    },
    async logout() {
      await api.logout();
      this.$store.commit("auth/setCurrentUser", null);
      Snacks.show(this.$store, { text: "Até logo!" });
    },
  },
};
</script>

<style scoped>
@import "~/assets/main.css";
.logo-buser {
  max-height: 50%;
}
.container-pages-toolbar {
  display: flex;
  align-items: center;
  margin-left: 2px;
}
.texto-toolbar {
  font-size: 15px;
  padding-top: 5px;
  padding-left: 2px;
  font-family: "Montserrat" !important;
  text-transform: lowercase;
  font-weight: 600;
}
</style>
