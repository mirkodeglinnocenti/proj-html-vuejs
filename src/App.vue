<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ArtistCoaching from './components/ArtistCoaching.vue';
import Testimonials from './components/Testimonials.vue';

export default {
    components:{
      Header,
      Hero,
      ArtistCoaching,
      Testimonials,
    }
}
</script>

<template>
  <Header />
  <Hero />
  <ArtistCoaching />
  <Testimonials />

</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
