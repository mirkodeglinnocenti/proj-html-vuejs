<template>
    <header class="main-header">
        <div class="container-large">
            <div class="row">
                <div class="col">
                    <a href="#">
                        <img src="/img/dark-logo.png" alt="logo MaxCoach">
                    </a>
                </div>
                <div class="col">
                    <ul class="menu-list row">
                        <li v-for="el in menu"><a href="#">{{ el }}</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="social-icons row">

                        <li class="icon-twitter">
                            <a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <div class="social-name-box twitter-box">
                                <p class="social-name">twitter</p>
                            </div>
                        </li>
                        
                        <li class="icon-facebook">
                            <a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            <div class="social-name-box facebook-box">
                                <p class="social-name">facebook</p>
                            </div>
                        </li>
                        <li class="icon-instagram">
                            <a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                            <div class="social-name-box instagram-box">
                                <p class="social-name">instagram</p>
                            </div>
                        </li>
                        <li class="icon-linkedin">
                            <a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                            <div class="social-name-box linkedin-box">
                                <p class="social-name">linkedin</p>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data (){
            return{
                menu: [
                    "Home", "Pages", "Courses", "Features", "Blog", "Shop"
                ]
            }
        }

    }
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.main-header{
    padding: 28px;
    background-color: white;
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.103);
    position: sticky;
    top: 0;
    z-index: 999;

    img{
        width: 160px;
    }
    .social-name-box{
        position: absolute;
        background-color: black;
        color: white;
        padding: 8px 10px;
        border-radius: 5px;
        .social-name{
            font-size: 12px;
            font-weight: 600;
        }
    }
    // TWITTER
    .icon-twitter{
        position: relative;
    }
    .social-name-box.twitter-box{
            display: none;
            bottom: -40px;
            right: 10px;
    }
    .icon-twitter:hover{
        .social-name-box.twitter-box{
            display: block;
        }
    }
    // Facebook
    .icon-facebook{
        position: relative;
    }
    .social-name-box.facebook-box{
            display: none;
            bottom: -40px;
            right: 10px;
    }
    .icon-facebook:hover{
        .social-name-box.facebook-box{
            display: block;
        }
    }
    // instagram
    .icon-instagram{
        position: relative;
    }
    .social-name-box.instagram-box{
            display: none;
            bottom: -40px;
            right: 10px;
    }
    .icon-instagram:hover{
        .social-name-box.instagram-box{
            display: block;
        }
    }
    // Linkedin
    .icon-linkedin{
        position: relative;
    }
    .social-name-box.linkedin-box{
            display: none;
            bottom: -40px;
            right: 10px;
    }
    .icon-linkedin:hover{
        .social-name-box.linkedin-box{
            display: block;
        }
    }





    .social-icons{
        font-size: 18px;
    }

    .icon{
        padding: 0 10px;
        color: $social-icon;
    }

    .icon:hover{
        color: $primary-color;
    }
}
.row{
    justify-content: space-between;
    align-items: center;
}

.menu-list{
    font-size: 1rem;
    gap: 40px;

    li {
        position: relative;
        padding-bottom: 5px;
    }

    li::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: $primary-color;
    transition-duration: 0.3s;
    }

    li:hover::before {
        width: 100%;
    }

}

</style>