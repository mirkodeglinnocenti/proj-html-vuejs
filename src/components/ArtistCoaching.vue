<template>
<section class="artist-coaching-section">

    <div class="section-text">
        <div class="container-small">
            <p class="italics-text">Artist coaching</p>
            <p class="title-section">I understand what it takes to create. I can help you with</p>
        </div>
    </div>

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
                        <h4 class="card-title">Online Courses</h4>
                        <p class="card-text">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
                <div class="col-3">
                    <div class="card">
                        <img src="/img/artist-box-image-03.png" alt="immagine">
                        <h4 class="card-title">Online Courses</h4>
                        <p class="card-text">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
                <div class="col-3 bottom">
                    <div class="card">
                        <img src="/img/artist-box-image-04.png" alt="immagine">
                        <h4 class="card-title">Online Courses</h4>
                        <p class="card-text">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
            </div>
            
        </div>
    </div>
      
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
                <span><a class="button button-secondary" href="#">get started today</a></span>

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
</section>
</template>

<script>
export default{
    
}
</script>

<style lang="scss" scoped>

.artist-coaching-section{
    padding: 50px 0 100px 0;
    .section-text{
        text-align: center;
    }
    .italics-text{
        font-size: 48px;
    }

    .title-section{
        font-size: 34px;
        font-weight: 600;
        margin-bottom: 90px;
    }

    .card{


        .card-title{
            font-size: 20px;
        }

        .card-text{
            font-size: 15px;
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
}

.vision-section{
    padding: 90px;
    .quote-col{
        text-align: center;
        padding-right: 160px;
    }
    .vision-section_describe{
        align-self: flex-end;                   // da controllare
    }
    .title-section{
        font-size: 48px;
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
        font-size: 18px;
        margin-bottom: 40px;
    }
}

.video-section{
    padding: 90px;
    .video-box{
    max-width: 970px;
    margin: 0 auto;
}
}

</style>