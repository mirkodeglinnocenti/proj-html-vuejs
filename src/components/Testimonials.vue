<template>
    <section class="testimonial-section carousel-box">

        <HeaderSection :header="header" />

        <img class="wave" src="/img/wave.svg" alt="">


        <div class="container-xl">
            <div class="row">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="card" :class="index === indiceSlideAttiva ? '' : 'disable' ">
                    <p class="card-title">{{testimonial.cardTitle}}</p>
                    <p class="card-text">{{ testimonial.cardText }}</p>
                    <div class="card-testimonial">
                        <figure>
                            <img :src="testimonial.src" alt="immagine del testimone">
                        </figure>
                        <div>
                            <p class="testimonial-name">{{testimonial.testimonialName}}</p>
                            <p class="testimonial-job">{{testimonial.testimonialjob}}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="carousel__arrow arrow-left" @click="leftSlide">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </div>
        
            <div class="carousel__arrow arrow-right" @click="rightSlide">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </div> 
            <div class="slider-dot">
                <font-awesome-icon icon="fa-solid fa-circle" :class="0 === indiceSlideAttiva ? '' : 'disable'"/>
                <font-awesome-icon icon="fa-solid fa-circle" :class="1 === indiceSlideAttiva ? '' : 'disable'"/>
                <font-awesome-icon icon="fa-solid fa-circle" :class="2 === indiceSlideAttiva ? '' : 'disable'"/>
                <!-- <font-awesome-icon icon="fa-solid fa-circle" :class="3 === indiceSlideAttiva ? '' : 'disable'"/> -->
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
    data(){
        return{
            header:{
                title: 'Testimonials',
                text: 'Why do people love me?'
            },
            testimonials: [
                {
                    cardTitle: 'High level of efficiency and scientific teaching methods',
                    cardText: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                    src: '/img/artist-testimonial-avatar-04.jpg',
                    testimonialName: 'Mina Hollace',
                    testimonialjob: '/ Freelancer'
                },
                {
                    cardTitle: 'Professional team of specialists and passionate mentors at reach ',
                    cardText: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    src: '/img/artist-testimonial-avatar-01.jpg',
                    testimonialName: 'Madley Pondor',
                    testimonialjob: '/ IT Specialist'
                },
                {
                    cardTitle: 'The MaxCoach team works really hard to ensure high quality',
                    cardText: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.',
                    src: '/img/artist-testimonial-avatar-03.jpg',
                    testimonialName: 'Luvic Dubble',
                    testimonialjob: '/ Private Tutor'
                },
                // {
                //     cardTitle: 'It\'s a choice of quality for people with special needs',
                //     cardText: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
                //     src: '/img/artist-testimonial-avatar-02.jpg',
                //     testimonialName: 'Florence Themes',
                //     testimonialjob: 'Multimedia Admin'
                // },
            ],
            indiceSlideAttiva : 1,
        }
    },
    methods:{
        leftSlide,
        rightSlide,
    }
}





// Slide successiva

function rightSlide() {


    if (this.indiceSlideAttiva <  this.testimonials.length - 1){

        this.indiceSlideAttiva++;


    } else if (this.indiceSlideAttiva =  this.testimonials.length - 1) {

        this.indiceSlideAttiva = 0;

    }

    console.log('current slide', this.indiceSlideAttiva);


}



// Slide precedente


function leftSlide() {

console.log('current slide', this.indiceSlideAttiva);

    if (this.indiceSlideAttiva > 0){

        this.indiceSlideAttiva--;

    } else if (this.indiceSlideAttiva === 0){

        this.indiceSlideAttiva = this.testimonials.length - 1;

    }

    console.log('current slide', this.indiceSlideAttiva);


}
</script>

<style lang="scss" >
@use '../style/partials/variables.scss' as *;

.testimonial-section{
    position: relative;
    background-color: $background-color;
    padding: 70px 0 85px;

    .title-section{
        margin-bottom: 50px;
    }
    .wave{
        position: absolute;
        top: -300px;
        left: 0;
        z-index: -2;
    }
    .row{
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 40px;
    }
    .slider-dot{
        display: flex;
        justify-content: center;
        padding-top: 40px;
        gap: 10px;
        .fa-circle{
            font-size: 10px;
        }
    }
    ::-webkit-scrollbar{
        display: none;
    }

    .card{
        flex-basis: 570px;
        flex-shrink: 0;
        padding: 48px 50px 68px 50px;
        background-color: white;

        .card-title{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 30px;
        }
        .card-text{
            font-size: 18px;
            margin-bottom: 45px;
        }
        .card-testimonial{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px;

            img{
                width: 70px;
                display: block;
                aspect-ratio: 1/1;
                object-fit: contain;
                object-position: center;
                border-radius: 50%;
            }
            .testimonial-name{
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 10px;
            }
            .testimonial-job{
                font-size: 15px;
            }
        }
    }
}

.disable{
    opacity: 0.4;
}
.carousel-box {
	position: relative;
}

.carousel-box .carousel__arrow {
    font-size: 30px;
    padding: 5px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

.carousel-box .carousel__arrow.arrow-left {
	left: 15px;
}

.carousel-box .carousel__arrow.arrow-right {
	right: 15px;
}

</style>