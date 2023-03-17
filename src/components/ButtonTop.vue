<template>
    <a href="#"> 
        <div @click="turnOnTop" class="circolar-button" >
            
            <font-awesome-icon class="arrow-icon" icon="fa-solid fa-arrow-up-long" />
            
        </div>
    </a>
</template>

<script>
export default{
    methods:{
        turnOnTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.circolar-button{
    position: fixed;
    width: 50px;
    aspect-ratio: 1/1;
    color: white;
    background-color: $primary-color;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    right: 20px;
}
.arrow-icon{
    transition-duration: 0.8s;
}
.circolar-button:hover{
    .arrow-icon{
        transform: translateY(-5px);
        transition-duration: 0.8s;
    }
}
</style>