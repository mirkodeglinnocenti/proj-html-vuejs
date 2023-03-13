<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ArtistCoaching from './components/ArtistCoaching.vue';

export default {
    components:{
      Header,
      Hero,
      ArtistCoaching,
    }
}
</script>

<template>
  <Header />
  <Hero />
  <ArtistCoaching />
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
