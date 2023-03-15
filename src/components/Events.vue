<template>
<section class="event-section">

    <HeaderSection :header="header"/>

    <div class="container-medium">
        <div class="row">
            <div class="col-6">
                <CardEvent :card="cards[0]" />
            </div>
            <div class="col-6">
                <CardEvent :card="cards[1]" />
            </div>
            <div class="col-6 inverse">
                <CardEvent :card="cards[2]" />
            </div>
            <div class="col-6 inverse">
                <CardEvent :card="cards[3]" />
            </div>
        </div>


    </div>
    

</section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import CardEvent from './CardEvent.vue';

export default {
    components:{
        HeaderSection,
        CardEvent
    },
    data(){
        return{
            header:{
                title: 'Upcoming Events',
                text: 'Let\'s Work Together'
            },
            cards:[
                {
                src: '/img/artist-event-04-250x300.jpg',
                date: 'APR 22, 2021',
                title: 'Storytelling Workshop',
                place: 'Texas, US'
                },
                {
                src: '/img/artist-event-03-250x300.jpg',
                date: 'OCT 10, 2020',
                title: 'Painting Art Contest 2020',
                place: 'New York, US'
                },
                {
                src: '/img/artist-event-02-250x300.jpg',
                date: 'NOV 23, 2020',
                title: 'International Art Fair 2020',
                place: 'Hamburg, Germany'
                },
                {
                src: '/img/artist-event-01-250x300.jpg',
                date: 'DEC 15, 2020',
                title: 'Street Performance: Call for Artist',
                place: 'Illinois, US'
                },
            ]
        }
    }
}
</script>

<style lang="scss">

.event-section{
    padding: 80px;

    .row{
        gap: 40px;
    }
    .col-6{
        flex-basis: calc( 50% - 40px);
    }
    .inverse{
        .card{
            flex-direction: row-reverse;
        }
        .card-description{
            text-align: end;
        }
        .card-icon-summary{
           justify-content: end;
        }
    }
}
</style>