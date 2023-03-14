<template>
    <section class="testimonial-section">

        <div class="testimonial-header">
            <p class="italics-text">Testimonials</p>
            <p class="title-section">Why do people love me?</p>
        </div>

        <div class="container-xl">
            <div class="row">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="card">
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
        </div>

    </section>
</template>

<script>
export default{
    data(){
        return{
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
                {
                    cardTitle: 'It\'s a choice of quality for people with special needs',
                    cardText: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
                    src: '/img/artist-testimonial-avatar-02.jpg',
                    testimonialName: 'Florence Themes',
                    testimonialjob: 'Multimedia Admin'
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.testimonial-section{
    background-color: $background-color;
    padding: 70px 0 85px;

    .testimonial-header{
        text-align: center;
    }
    .italics-text{
        font-size: 48px;
    }

    .title-section{
        font-size: 34px;
        font-weight: 600;
        margin-bottom: 50px;
    }
    .row{
        flex-wrap: nowrap;
        gap: 40px;
    }
    .card{
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

</style>