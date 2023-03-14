<template>
<section class="hero-section">
    <div class="container-small">
        <p class="italics-text">Hello, im Martin</p>
        <p class="title-hero">Artist coaching and mentoring might be for you.</p>
        <span><a class="button button-primary" href="#">get started today</a></span>
        <img class="shape2" src="/img/artist-shape-02.png" alt="">
        <img class="shape" src="/img/shape.svg" alt="">
        <img class="shape3" src="/img/artist-shape-03.png" alt="">
        <img class="shape4" src="/img/artist-shape-04.png" alt="">
        <img class="shape5" src="/img/artist-shape-05.png" alt="">
        <img class="shape7" src="/img/shape2.svg" alt="">
        <img class="shape6" src="/img/maxcoach-shape-12.png" alt="">
    </div>
</section>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.hero-section{
    position: relative;
    text-align: center;
    padding: 240px 0;
    height: 740px;
    background-color: #FBF9F6;

    .italics-text{
        font-size: 64px;
    }

    .title-hero{
        font-size: 40px;
        font-weight: 600;
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

</style>