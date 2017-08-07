<template>
  <!-- <v-app dark> -->
  <main id="app" data-app="true" class="bigfaster application" :class="{'application--light': theme, 'application--dark': !theme}">
    <component :is="layout">
      <slot></slot>
    </component>

    <v-btn
      absolute
      dark
      fab
      fixed
      :class="['btn-auth', {indigo: auth, red: !auth}]"
      @click.native="authChange"
    >
      <v-icon>{{ (auth) ? 'lock_open' : 'lock' }}</v-icon>
    </v-btn>
  </main>
  <!-- </v-app> -->
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],

    data () {
      return {
        theme: false
      }
    },
    computed: {
      auth () {
        return this.$store.state.auth
      },
      layout () {
        switch(this.$route.name) {
          case 'Landing':
          case 'SingIn':
          case 'SingUp':
            return 'ContentOnly'
            break;
          case 'Profile':
          case 'Welcome':
          case 'Inspire':
            return 'VerticalLeftNavigationToolbar'
            break;
          default:
            return 'ContentOnly'
        }
      }
    },
    methods: {
      authChange () {
        // this.theme = !this.theme
        this.$store.dispatch('authChange')
      }
    }
  }
</script>

<style>
  @import url('./css/main.css');
  .btn-auth {
    top: 50%;
    right: 5px;
    z-index: 999; }
</style>
