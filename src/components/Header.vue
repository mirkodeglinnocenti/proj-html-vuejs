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
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                        <li><a class="icon" href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a></li>
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

    img{
        width: 160px;
    }
    .social-icons{
        font-size: 18px;
        // gap: 24px;
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
}

</style>