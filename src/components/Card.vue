<template>

    <div class="card">
        <img class="card-img" :src="card.src" alt="immagine del corso">
        <div class="card-description">
            <p class="card-category">{{ card.category }}</p>
            <h4 class="card-title">{{ card.title }}</h4>
            <div class="row card-icon-row">
                <div class="card-icon-summary">
                    <font-awesome-icon icon="far fa-file-alt" />
                    <p>{{ card.date }}</p>
                </div>
                <div class="card-icon-summary">
                    <font-awesome-icon icon="fa-regular fa-user" />
                    <p>{{card.views}} views</p>
                </div>
            </div>
        </div>

    </div>

</template>
    
<script>

export default{
    props:{
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.article-section{
    padding: 90px;
    background-color: $background-color;

    .card{
        overflow: hidden;
        box-shadow: 0 1px 20px rgba(0, 0, 0, 0.171);
    }
    .card:hover{
        .card-img{
            transform: scale(1.1);
            transition-duration: 0.8s;
        }
    }

    img{
        display: block;
    }
    .card-img{
        transition-duration: 0.6s;
    }

    .card-description{
        position: relative;
        bottom: 0;
        padding: 26px 20px 35px;
        background-color: white;
    }
    .card-icon-row{
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    .card-title{
        font-family: "Gilroy-bold", sans-serif;
        font-size: 20px;
        margin-bottom: 18px;
    }
    .card-category{
        font-size: 15px;
        text-transform: uppercase;
        color: $text-color;
        margin-bottom: 5px;
    }
    .card-icon-summary{
        display: flex;
        align-items: center;
        gap: 8px;
        color: $text-color;
        font-size: 14px;
    }
}
</style>