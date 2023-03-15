<template>

    <div class="card">

        <div class="card-left">
            <img class="card-img" :src="card.src" alt="immagine del corso">
        </div>
        
        <div class="card-description">
            <p class="card-date">{{ card.date }}</p>
            <h4 class="card-title">{{ card.title }}</h4>
            <div class="card-icon-summary">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                <p>{{ card.place }}</p>
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

.card{
    overflow: hidden;
    display: flex;
    .card-left{
        flex-basis: 40%;
        overflow: hidden;
    }
    .card-description{
        flex-basis: 60%;
    }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 45px;
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
.card-date{
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

</style>