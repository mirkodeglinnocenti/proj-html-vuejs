<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ArtistCoaching from './components/ArtistCoaching.vue';
import Testimonials from './components/Testimonials.vue';
import ArtistCourses from './components/ArtistCourses.vue';
import Footer from './components/Footer.vue';
import NewsLetter from './components/NewsLetter.vue';
import Articles from './components/Articles.vue';
import Events from './components/Events.vue';
import ButtonTop from './components/ButtonTop.vue';

export default {
    components:{
    Header,
    Hero,
    ArtistCoaching,
    Testimonials,
    ArtistCoaching,
    ArtistCourses,
    Footer,
    NewsLetter,
    Articles,
    Events,
    ButtonTop
}
}
</script>

<template>
  <Header />
  <Hero />
  <ArtistCoaching />
  <Testimonials />
  <ArtistCourses />
  <Articles />
  <Events />
  <NewsLetter />
  <Footer />
  <ButtonTop />

</template>

<style lang="scss">
@use './style/general.scss' as *;

@font-face {
  font-family: "Rossela Demo";
  src: local("Rossela Demo"),
   url(/fonts/rossela-demo.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy-Regular";
  src: local("Gilroy-Regular"),
   url(/fonts/Gilroy-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Gilroy-Bold";
  src: local("Gilroy-Bold"),
   url(/fonts/Gilroy-Bold.ttf) format("truetype");
}


</style>
