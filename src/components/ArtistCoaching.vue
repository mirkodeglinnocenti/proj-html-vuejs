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
                        <p class="card-tezt">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
                <div class="col-3">
                    <div class="card bottom">
                        <img src="/img/artist-box-image-02.png" alt="immagine">
                        <h4 class="card-title">Online Courses</h4>
                        <p class="card-tezt">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
                <div class="col-3">
                    <div class="card">
                        <img src="/img/artist-box-image-03.png" alt="immagine">
                        <h4 class="card-title">Online Courses</h4>
                        <p class="card-tezt">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
                <div class="col-3 bottom">
                    <div class="card">
                        <img src="/img/artist-box-image-04.png" alt="immagine">
                        <h4 class="card-title">Online Courses</h4>
                        <p class="card-tezt">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
                    </div>  
                </div>
            </div>
            
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
    padding: 50px 0;
    .section-text{
        text-align: center;
    }
    .italics-text{
        font-size: 48px;
    }

    .title-section{
        font-size: 34px;
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

</style>