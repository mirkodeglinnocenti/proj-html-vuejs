<template>
<section class="artist-coaching-section">

    <HeaderSection :header="header" />

    <div class="service-card">
        <div class="container-medium">
            <div class="row">
                <div class="col-3">
                    <div class="card">
                        <img src="/img/artist-box-image-01.png" alt="immagine">
                        <h4 class="card-title">Online Courses</h4>
                        <p class="card-text">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
                <div class="col-3">
                    <div class="card bottom">
                        <img src="/img/artist-box-image-02.png" alt="immagine">
                        <h4 class="card-title">One to One</h4>
                        <p class="card-text">Getting the necessary clarity about the current state to help you improve your ability.</p>
                    </div>  
                </div>
                <div class="col-3">
                    <div class="card">
                        <img src="/img/artist-box-image-03.png" alt="immagine">
                        <h4 class="card-title">Anywhere</h4>
                        <p class="card-text">Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
                    </div>  
                </div>
                <div class="col-3 bottom">
                    <div class="card">
                        <img src="/img/artist-box-image-04.png" alt="immagine">
                        <h4 class="card-title">On Time</h4>
                        <p class="card-text">Punctuality is our top priority because it's an essential criteria to assess a program quality.</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    
    <img class="el1" src="/img/maxcoach-shape-14.png" alt="">
    <img class="el2" src="/img/shape3.svg" alt="">
    <img class="el3" src="/img/shape4.svg" alt="">
    <img class="el4" src="/img/maxcoach-shape-13.png" alt="">


</section>

<section class="vision-section">
    <div class="container-medium">
        <div class="row">
            <div class="col-6 quote-col">
                <p class="title-section">I coach and mentor visual artists, like you, to Create Like You Mean It</p>
                <p class="italics-text">Martin Garrix</p>
            </div>
            <div class="col-6 vision-section_describe">
                <p class="vision-section_text">As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. 
                    I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be.
                    I support artists in crafting and living a creative life as well as feeling good about themselves and their art.
                </p>
                <p class="vision-section_text">As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
                <span><a class="button button-secondary" href="#">Get started today</a></span>

            </div>
        </div>
    </div>
</section>

<section class="video-section">
    <div class="container-medium">
        <div class="video-box">
            <iframe 
                width="100%" 
                height="600px" 
                frameborder="0" 
                allowfullscreen 
                src="https://www.youtube.com/embed/ElFJ1qcl74U">
            </iframe>
        </div>
    </div>
    <img class="el5" src="/img/shape.svg" alt="">
    <img class="el6" src="/img/maxcoach-shape-05.png" alt="">
    <img class="el7" src="/img/maxcoach-shape-05.png" alt="">
</section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';

export default{
    components:{
        HeaderSection,
    },
    data (){
        return{
            header: {
                title: "Artist coaching",
                text: "I understand what it takes to create. I can help you with"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.artist-coaching-section{
    padding: 50px 0 100px 0;
    position: relative;
    overflow: hidden;
    
    .card{


        .card-title{
            font-size: 20px;
            color: $text-bold;
            margin-bottom: 10px;
        }

        .card-text{
            font-size: 15px;
            line-height: 25px;
            color: #4d4d4d;
        }
    }
    .row{
        margin: 0 -16px;
    }
    .col-3{
        padding: 0 16px;
    }

    .bottom{
        padding-top: 50px;
    }
    .el1{
    position: absolute;
    top: 100px;
    left: 0;
    z-index: -1;
    }
    .el2{ 
        position: absolute;
        top: 80px; 
        left: -180px;
        width: 735px;
        transform: rotate(21deg) scale(1, -1);
        z-index: -2;
    }
    .el3{
        position: absolute;
        top: 250px;
        right: 265px;
        width: 370px;
        z-index: -2;
    }
    .el4{
        position: absolute;
        top: 230px;
        right: -60px;
    }
}

.vision-section{
    padding: 90px;
    .quote-col{
        text-align: center;
        padding-right: 140px;
    }
    .vision-section_describe{
        align-self: flex-end;              
    }
    .title-section{
        font-family: "Gilroy-Bold", sans-serif;
        font-size: 48px;
        line-height: 65px;
        color: $text-bold;
        position: relative;
    }
    .title-section::before{
        content: url(/img/artist-quote-icon.png);
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .italics-text{
        font-size: 48px;
    }
    .vision-section_text{
        color: $text-color;
        font-size: 18px;
        margin-bottom: 40px;
    }
}

.video-section{
    position: relative;
    padding: 90px;
    .video-box{
    max-width: 970px;
    margin: 0 auto;
    }
    .el5{
    position: absolute;
    top: 50px;
    left: 380px;
    z-index: -1;
    }
    .el6{
    position: absolute;
    top: 90px;
    left: 340px;
    z-index: -1;
    }
    .el7{
    position: absolute;
    bottom: 200px;
    right: 380px;
    z-index: -1;
    }
}

.service-card{
    img{
        margin-bottom: 10px;
    }
}

</style>