<template>
  <section class="landing">
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
    <!-- <v-flex xs12 flex align-center class="carousel-init text-xs-center">
      <h3>Carousel</h3>
    </v-flex> -->
    <v-layout xs12 row wrap justify-center class="ma-4">
      <v-flex xs5 md2>
        <v-card>
          <v-card-text>Autos</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5 md2>
        <v-card>
          <v-card-text>Inmuebles</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5 md2>
        <v-card>
          <v-card-text>Productos</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5 md2>
        <v-card>
          <v-card-text>Servicios</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { src: '/static/doc-images/carousel/squirrel.jpg' },
          { src: '/static/doc-images/carousel/sky.jpg' },
          { src: '/static/doc-images/carousel/bird.jpg' },
          { src: '/static/doc-images/carousel/planet.jpg' }
        ]
      }
    }
  }
</script>

<style>
  .card .card__text {
    text-align: center; }
</style>
