<template>
  <div class="content-only">
    <v-toolbar fixed>

      <v-toolbar-items>
        <v-btn flat :to="{name: 'Landing'}" class="bf-logo">
          <img src="/static/bigfaster/logo.png" alt="BigFaster" class="img-responsive" />
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat class="bf-shopping" :to="{name: 'Shopping'}"><v-icon>shopping_basket</v-icon>&nbsp;&nbsp;Ir de Compras</v-btn>
        <v-btn v-if="!auth" flat :to="{name: 'SingIn'}" exact>Iniciar Sesión</v-btn>
        <v-btn v-else flat :to="{name: 'Profile', params: {slug: user_slug} }" exact>Profile</v-btn>
        <v-btn flat>Publica con nosotros</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-slide-y-transition appear mode="out-in">
      <router-view></router-view>
    </v-slide-y-transition>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        user_slug: 'herick-ruiz'
      }
    },
    computed: {
      auth () {
        return this.$store.state.auth
      }
    }
  }
</script>

<style>
  .toolbar .toolbar__items .btn {
    text-transform: none; }

  .toolbar .toolbar__items .bf-shopping .icon {
    color: #bc8706; }

  .toolbar .toolbar__items .bf-logo {
    border-radius: 50%;
    margin-top: 10px;
    height: 120px;
    width: 120px; }
    .toolbar .toolbar__items .bf-logo .btn__content {
      padding: 0px;
      width: 100%; }
    .toolbar .toolbar__items .bf-logo.btn--active .btn__content::before {
      display: none; }
</style>
