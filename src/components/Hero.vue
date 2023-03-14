<template>
<section class="hero-section">
    <div class="container-small">
        <div class="hero-text">
            <HeaderSection :header="header "/>
            <span><a class="button button-primary" href="#">Get started today</a></span>
        </div>
        
        <img class="shape2" src="/img/artist-shape-02.png" alt="">
        <img class="shape" src="/img/shape.svg" alt="">
        <img class="shape3" src="/img/artist-shape-03.png" alt="">
        <img class="shape4" src="/img/artist-shape-04.png" alt="">
        <img class="shape5" src="/img/artist-shape-05.png" alt="">
        <img class="shape7" src="/img/shape2.svg" alt="">
        <img class="shape6" src="/img/maxcoach-shape-12.png" alt="">
        <img class="hero-img1" src="/img/artist-hero-image-04.jpg" alt="">
        <img class="hero-img2" src="/img/artist-hero-image-02.jpg" alt="">
        <img class="hero-img3" src="/img/artist-hero-image-01.jpg" alt="">
    </div>
</section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';

export default{
    components:{
        HeaderSection
    },
    data(){
        return{
            header:{
                title: 'Hello, im Martin',
                text: 'Artist coaching and mentoring might be for you.'
            }
        }
    }
}
</script>

<style lang="scss">
@use '../style/partials/variables.scss' as *;

.hero-section{
    position: relative;
    text-align: center;
    padding: 240px 0;
    height: 740px;
    background-color: #FBF9F6;

    .hero-text{
        position: relative;
        z-index: 1;
    }

    .italics-text{
        font-size: 64px;
    }

    .title-section{
        font-size: 40px;
        text-transform: capitalize;
        margin-bottom: 40px;
    }
}

.hero-section::before{
        content: url(/img/artist-hero-image-03.png);
        position: absolute;
        bottom: 25px;
        left: 25%;
}

.hero-section::after{
        content: url(/img/artist-shape-01.png);
        position: absolute;
        top: 0;
        right: 150px;
}
.shape{
    position: absolute;
    left: -65px;
    bottom: 40px;
    width: 480px;
    height: 480px;
}
.shape2{
    position: absolute;
    top: 0;
    left: 0;
}
.shape3{
    position: absolute;
    top: 160px;
    left: 15px;
}
.shape4{
    position: absolute;
    top: 80px;
    right: 155px;
}

.shape5{
    position: absolute;
    bottom: 0;
    right: 80px;
}
.shape6{
    position: absolute;
    bottom: 40px;
    right: 350px;
}
.shape7{
    position: absolute;
    bottom: 85px;
    right: 430px;
}
.hero-img1{
    position: absolute;
    bottom: 100px;
    right: 180px;
}
.hero-img2{
    position: absolute;
    top: 150px;
    left: 280px;
}
.hero-img3{
    position: absolute;
    bottom: 110px;
    left: 180px;
}
</style>