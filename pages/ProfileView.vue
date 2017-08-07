<template>
  <section>
    <template v-if="userData">
      <h1>Profile</h1>
      <h5>{{ userData.first_name }} {{ userData.last_name }}</h5>
    </template>
    <p v-else>Cargando .....</p>
  </section>
</template>

<script>
  export default {
    watch: {
      '$route': 'setMeta'
    },
    created () {
      this.$ssrContext.title = 'Lorem ipsum dolor sit.'
      this.$ssrContext.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa commodi velit dignissimos earum delectus totam porro quae laudantium enim libero. Ea impedit esse vel repudiandae ipsa modi, obcaecati cumque provident.'
      this.$ssrContext.keywords = 'Lorem, ipsum, dolor, sit, amet'
    },
    mounted () {
      this.$vuetify.load(this.setMeta)
    },
    data () {
      return {}
    },
    methods: {
      userData () {
        return setMeta()
      },
      setMeta () {
        return setTimeout(() => {
          return {
            _id: Math.random().toString(22).substring(3),
            first_name: 'Herick',
            last_name: 'Ruiz',
            slug: this.$route.params.slug,
            title: 'Lorem ipsum dolor sit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores dolorum adipisci assumenda animi similique quia...',
            keywords: 'Lorem, ipsum, dolor, sit, amet'
          }
        }, 1500)
      }
    }
  }
</script>
