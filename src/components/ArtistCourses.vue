<template>
    <section class="courses-section">
        <div class="container-large">
            <HeaderSection :header="header"/>

            <div class="grid">
                <div v-for="(card, index) in cards" :key="index" class="card">
                    <img class="card-img" :src="card.src" alt="immagine del corso">
                    <div class="card-description">
                        <p class="card-price">&dollar;{{ card.price }}</p>
                        <h4 class="card-title">{{ card.title }}</h4>
                        <div class="row">
                            <div class="card-icon-summary">
                                <font-awesome-icon icon="far fa-file-alt" />
                                <p>{{ card.lessons }} Lessons</p>
                            </div>
                            <div class="card-icon-summary">
                                <font-awesome-icon icon="fa-regular fa-user" />
                                <p>{{card.students}} Students</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
            <div class="button-box">
                <span>
                    <a class="button button-secondary" href="#">
                        View all courses
                        <font-awesome-icon class="input-icon" icon="fa-solid fa-arrow-right-long" />
                    </a>
                </span>
            </div>

        </div>
        
    </section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';

export default{
    components:{
        HeaderSection,
    },
    data (){
        return {
            header: {
                title: 'Artist coaching',
                text: 'Latest Online Courses'
            },
            cards:[
                {
                src: '/img/artist-course-08-480x480.jpg',
                price: '18.00',
                title: 'The Acrylic Painting Academy',
                lessons: '4',
                students: '50'
                },
                {
                src: '/img/artist-course-07-480x480.jpg',
                price: '21.00',
                title: 'Drawing and Shading: Complete Course',
                lessons: '14',
                students: '50'
                },
                {
                src: '/img/artist-course-06-480x480.jpg',
                price: '19.00',
                title: 'The Color Theory for Digital Artist',
                lessons: '7',
                students: '50'
                },
                {
                src: '/img/artist-course-05-480x480.jpg',
                price: '35.00',
                title: 'Ultimate Guide to Digital Sketching for Beginner',
                lessons: '14',
                students: '50'
                },
                {
                src: '/img/artist-course-04-480x480.jpg',
                price: '19.00',
                title: 'Portrait Drawing The Smart Way',
                lessons: '2',
                students: '50'
                },
                {
                src: '/img/artist-course-03-480x480.jpg',
                price: '19.00',
                title: 'Mastering Watercolor Painting from Beginner',
                lessons: '9',
                students: '50'
                },
                {
                src: '/img/artist-course-02-480x480.jpg',
                price: '25.00',
                title: 'The Art & Science of Drawing',
                lessons: '4',
                students: '50'
                },
                {
                src: '/img/artist-course-01-480x480.jpg',
                price: '22.00',
                title: 'The Colored Pencil Drawing Course',
                lessons: '6',
                students: '50'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
.courses-section{
    padding: 90px;

    .grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
    }
    img{
        display: block;
    }
    .card{
        overflow: hidden;
    }
    .card:hover{

        .card-description{
            border: 2px solid $primary-color;
            transition-duration: 0.4s;
            bottom: 60px;
        }
        .card-img{
            transform: scale(1.1);
            transition-duration: 0.8s;
        }
    }

    .input-icon{
        padding-left: 5px;
    }

    .card-img{
        transition-duration: 0.6s;
    }

    .card-description{
        position: relative;
        bottom: 0;
        padding: 27px;
        margin-right: 30px;
        background-color: white;
        border: 2px solid transparent;
        transition-duration: 0.3s;
    }
    .row{
        align-items: center;
        gap: 20px;
    }
    .card-title{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 18px;
    }
    .card-price{
        font-size: 18px;
        font-weight: 600;
        color: $primary-color;
        margin-bottom: 15px;
    }
    .card-icon-summary{
        display: flex;
        align-items: center;
        gap: 8px;
        color: $text-color;
        font-size: 14px;
    }
}

.button-box{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

</style>