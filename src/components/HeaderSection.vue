<template>
    <div class="section-text">
        <div class="container-small">
            <h3 class="italics-text">{{header.title}}</h3>
            <p class="title-section">{{header.text}}</p>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        header: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.section-text{
    text-align: center;
}

.italics-text{
    font-size: 48px;
}

.title-section{
    font-family: "Gilroy-Bold", sans-serif;
    font-size: 34px;
    color: $text-bold;
    margin-bottom: 90px;
}
</style>