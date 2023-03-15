<template>
<section class="article-section">

    <HeaderSection :header="header"/>

    <div class="container-medium">
        <div class="row">
            <div class="col-3 col-left">
                <Card :card="cards[0]" />
            </div>
            <div class="col-5 col-center">
                <Card :card="cards[1]" class="card-big" />
            </div>
            <div class="col-3 col-right">
                <Card :card="cards[2]" />
            </div>
        </div>


    </div>

    <div class="cta-blog">
        <span class="cta-text">
            Get into details now? 
            <a href="#">
                View all posts
                <font-awesome-icon class="input-icon" icon="fa-solid fa-arrow-right-long" />
            </a>
        </span>
    </div>
</section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import Card from './Card.vue';

export default{
    components:{
        HeaderSection,
        Card,
    },
    data (){
        return{
            header:{
                title:'Articles and Tips',
                text:'Latest From The Blog'
            },
            cards:[
                {
                src: '/img/artist-blog-03-480x356.jpeg',
                category: 'Artist',
                title: 'Brush Strokes Energize Trees in Paintings',
                date: 'May 15, 2020',
                views: '1,662'
                },
                {
                src: '/img/artist-blog-02-500x680.jpg',
                category: 'Artist',
                title: 'Connection Between Self-Portraits and Identity',
                date: 'May 15, 2020',
                views: '1,722'
                },
                {
                src: '/img/artist-blog-01-480x356.jpg',
                category: 'Artist',
                title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                date: 'May 15, 2020',
                views: '1,549'
                }
            ]
        }
    }
}
</script>

<style lang="scss" >
@use '../style/partials/variables.scss' as *;

.article-section{
    padding: 90px 0 60px;
    background-color: $background-color;

    .row{
        gap: 65px;
        flex-wrap: nowrap;
    }
    .col-3{
        flex-basis: 280px;
    }
    .col-left{
        padding-top: 160px;
    }
    .col-right{
        padding-top: 55px;
    }
    .cta-blog{
        text-align: center;
        padding-top: 90px;
        .cta-text{
            font-size: 18px;
            font-weight: 600;
            color: $text-color;
        }
        a{
            color: $primary-color;
        }
        a:hover{
            border-bottom: 1px solid $primary-color;
        }
        .input-icon{
            font-size: 16px;
        }
    }

}

.col-center{ 
    position: relative;
    .card-big{
        color: white;
        .card-description{
            position: absolute;
            bottom: 0;
            padding: 20px 34px 54px;
            background-color: transparent;
        }
        .card-category{
            color: white;
        }
        .card-title{
            font-size: 34px;
        }
        .card-icon-row{
            flex-direction: row;
            gap: 30px;
        }
        .card-icon-summary{
            color: white;
        }
        .card-img{
            filter: brightness(0.8);
        }
    }   
}


</style>