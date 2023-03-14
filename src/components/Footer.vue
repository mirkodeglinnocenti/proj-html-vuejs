<template>
    <footer class="main-footer">
        <div class="container-large">
            <div class="row">
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
                <div class="col-3 address-col">
                    <h6 class="col-title">Explore</h6>
                    <ul class="address-col">
                        <li v-for="(link, index) in explore" :key="index" class="col-text"><a href="#">{{link}}</a></li>
                    </ul>
                </div>
                <div class="col-3 address-col">
                    <h6 class="col-title">Information</h6>
                    <ul class="address-col">
                        <li v-for="(link, index) in information" :key="index" class="col-text"><a href="#">{{link}}</a></li>
                    </ul>
                </div>
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
    padding: 90px;
    .address-col{
        display: flex;
        flex-direction: column;
        gap: 10px;
    .col-title{
        font-size: 18px;
        font-family: "Gilroy-Bold", sans-serif;
        color: $text-bold;
    }
    .col-text{
        font-size: 14px;
        font-weight: 600;
        color: $text-color;
    }
    
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