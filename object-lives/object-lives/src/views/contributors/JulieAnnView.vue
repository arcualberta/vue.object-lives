<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-07.gif" alt="Julie-Ann Mercer" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                COLLABORATOR (2017 - ) <br>
                ADMINISTRATIVE ASSISTANT (2014 - )
            </h6>
            <p class="introduction">
                INDEPENDENT WRITER AND RESEARCHER
            </p>
            <p class="description">
                Julie-Ann Mercer received her MA in the History of Art, Design, and Visual Culture from the University of Alberta in 2017. Her ongoing research examines the construction of Indigenous and settler culture in <i>the Views in Hudson’s Bay (1825), </i>a series of six hand-coloured lithographs based on watercolours by the nineteenth-century artist Peter Rindisbacher. In conjunction with her academic pursuits, Julie-Ann is an active member in the arts community, contributing exhibition essays and art reviews for galleries, magazines, and blogs.
            </p>
            <a href="mailto:julie-ann.mercer@ualberta.ca" class="emailcontent">julie-ann.mercer@ualberta.ca</a>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image-container {
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .image-container img {
        max-width: 100%;
        height: auto;
        display: block;
        margin-top: 20px;
        margin-left: 200px;
    }

    .text-container {
        font-family: 'DM Sans';
        max-width: 800px;
        justify-content: center;
        margin-bottom: 20px;
    }

    .heading {
        margin-top: 10px;
        font-style: italic;
        font-weight: bolder;
        font-size: 15px;
    }

    .introduction {
        font-size: 14px;
        font-weight: bold;
    }

    .description {
        font-size: 14px;
        text-align: justify;
    }

    .emailcontent {
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        margin-top: 2px;
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 20px;
        }

        .text-container {
            max-width: 100%;
            text-align: center;
            margin-bottom: 60px;
        }

        .heading, .introduction {
            text-align: justify;
        }

        .emailcontent {
            text-align: left; 
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .image-container {
            img {
                aspect-ratio: 1/0.5;
                margin-top: 20px;
            }
        }
    }
</style>