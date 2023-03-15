<template>
<section class="newsletter-section">
    <div class="container">
        <div class="row">

            <div class="col-4 col-left">
                <p class="newsletter-title">Newsletter to get in touch</p> 
            </div>

            <div class="col-8 form-box">
                <input class="newsletter-form" type="text" placeholder="Your e-mail">
                <font-awesome-icon class="input-icon" icon="fa-solid fa-arrow-right-long" />
            </div>

            <img class="graphic-el" src="/img/artist-shape-color-paint-top-left.png" alt="">
            <img class="graphic-el2" src="/img/artist-shape-color-paint-bottom-right.png" alt="">
        </div>
    </div>
</section>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>

.newsletter-section{
    position: relative;
    padding: 48px;
    background-color: #244186;
    color: white;
    .container{
        max-width: 1050px;
        margin: 0 auto;
    }
    .row{
        align-items: center;
    }
    .col-left{
        padding-right: 90px;
    }
    .newsletter-title{
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 34px;
        text-align: end;
    }
    .form-box{
        position: relative;
        padding-left: 20px;
    }
    .newsletter-form{
        width: 100%;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid #ffffff40;
        font-family: "Gilroy-Regular", sans-serif;
        font-size: 24px;
        padding: 10px 0;
        color: white;
    }
    .newsletter-form:active{
        border: 0;
    }
    .input-icon{
        position: absolute;
        font-size: 20px;
        bottom: 12px;
        right: 0;
    }
    .graphic-el{
        position: absolute;
        left: 0;
    }
    .graphic-el2{
        position: absolute;
        bottom: 0;
        right: 0;
    }
}

::placeholder{
    color: rgba(255, 255, 255, 0.808);

}
</style>