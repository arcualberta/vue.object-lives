<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-04.gif" alt="Judy Half" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                COLLABORATOR
            </h6>
            <p class="introduction">
                PHD CANDIDATE<br>
                DEPARTMENT OF ANTHROPOLOGY & ARCHAEOLOGY, UNIVERSITY OF CALGARY
            </p>
            <p class="description">
                Judy Half originates from the Saddle Lake First Nation. It is located in the heart of Treaty Six Cree landscape. In the community she observed many of its economic, social and political events, and participated in many cultural and ceremonial practices that in which she applies to the artifacts research and cultural interpretations within museums through presentations.
                <br><br>In 1989, she attended the University of Alberta and graduated in 1994 with Bachelor in Natives Studies and Anthropology. Thereafter, she attained her field work in archaeology and in First Nations Governance and is in completion of a dual master’s program in Heritage Resource Management and Integrated Studies through Athabasca University.
                <br><br>She is involved with First Nations communities as Repatriation Officer for Alberta Government and is community liaison for other Aboriginal communities to interpret Cree culture, and is working with Edmonton Heritage Council as a Board of Governors. She is also a member to the Alberta Museum Association, Canadian Museum Association and ICOMOS.
            </p>
            <a href="mailto:judy.half@ucalgary.ca" class="emailcontent">judy.half@ucalgary.ca</a>
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
        margin-top: -100px;
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
                margin-top: -80px;
            }
        }
    }
</style>