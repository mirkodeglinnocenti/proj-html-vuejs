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
                    <ul class="row">
                        <li><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
                        <li><a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></li>
                        <li><a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                        <li><a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a></li>
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

.main-header{
    background-color: aqua;
    padding: 40px;

    img{
        width: 160px;
    }
}
.row{
    justify-content: space-between;
    align-items: center;
}

.menu-list{
    gap: 10px;
}

</style>