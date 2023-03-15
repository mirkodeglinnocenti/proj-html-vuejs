<template>
    <div @click="turnOnTop" class="circolar-button" >
        <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
    </div>
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
</style>