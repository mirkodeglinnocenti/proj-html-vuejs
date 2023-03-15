<template>
    <footer class="main-footer">
        <div class="container-large">
            <div class="row footer-box">
                <div class="col-3 address-col">
                    <h6 class="col-title">Address</h6>
                    <p class="col-text">382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                    <p class="col-text">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                    <p class="col-text"><a href="#">support@maxcoach.com</a></p>
                    <ul class="social-icons row">
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a></li>
                    </ul>
                </div>
                <div class="col address-col">
                    <h6 class="col-title">Explore</h6>
                    <ul class="address-col">
                        <li v-for="(link, index) in explore" :key="index" class="col-text"><a href="#">{{link}}</a></li>
                    </ul>
                </div>
                <div class="col address-col">
                    <h6 class="col-title">Information</h6>
                    <ul class="address-col">
                        <li v-for="(link, index) in information" :key="index" class="col-text"><a href="#">{{link}}</a></li>
                    </ul>
                </div>
                <div class="col-4 address-col">
                    <h6 class="col-title">Instagram<span class="tag-instagram">@maxcoach</span></h6>
                    
                    <ul class="instagram-gallery row">
                        <li class="instagram-post"><a href="#"><img src="/img/ig1.jpg" alt=""></a></li>
                        <li class="instagram-post"><a href="#"><img src="/img/ig2.jpg" alt=""></a></li>
                        <li class="instagram-post"><a href="#"><img src="/img/ig3.jpg" alt=""></a></li>
                    </ul>
                </div>
            </div>

            <div class="bottom-footer">
                <p class="col-text">© 2020 Maxcoach. All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    data (){
        return{
            explore: [
                'Start Here',
                'Success story',
                'Blog',
                'Courses',
                'Contact us'
            ],
            information: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of service'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.main-footer{
    padding: 100px 0 50px;
    .footer-box{
        justify-content: space-between;
        margin-bottom: 120px;
    }
    .address-col{
        display: flex;
        flex-direction: column;
        gap: 10px;
    .col-title{
        font-size: 18px;
        font-family: "Gilroy-Bold", sans-serif;
        color: $text-bold;
    }

    .tag-instagram{
        font-size: 15px;
        color: $primary-color;
        margin-left: 5px;
    }
    .instagram-gallery{
        gap: 20px;
        padding-top: 15px;
        .instagram-post{
            flex-basis: 136px;
            aspect-ratio: 1/1;
            transition-duration: 0.4s;
        }
        .instagram-post:hover{
            filter: grayscale(1);
            transition-duration: 0.4s;
        }
    }
    
}
.bottom-footer{
    text-align: center;
}
.col-text{
        font-size: 14px;
        font-weight: 600;
        color: $text-color;
}

.social-icons{
    font-size: 24px;
    padding-top: 10px;
    gap: 16px;
    margin: 0 -10px
}
.icon{
    padding: 0 10px;
    color: $social-icon;
}

.icon:hover{
    color: $primary-color;
}
}

</style>