<template>
<section class="hero-section">
    <div class="container-small">
        <p class="italics-text">Hello, im Martin</p>
        <p class="title-hero">Artist coaching and mentoring might be for you.</p>
        <span><a class="button button-primary" href="#">get started today</a></span>
    </div>
</section>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.hero-section{
    text-align: center;
    padding: 240px 0;
    background-color: #f5d6c1;

    .italics-text{
        font-size: 64px;
    }

    .title-hero{
        font-size: 40px;
        font-weight: 600;
        text-transform: capitalize;
        margin-bottom: 40px;
    }
}

</style>