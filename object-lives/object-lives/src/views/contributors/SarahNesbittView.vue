<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-13.gif" alt="Sarah Nesbitt" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                RESEARCH ASSISTANT (2014 - 2016)
            </h6>
            <p class="introduction">
                MA CANDIDATE IN ART HISTORY <br>
                DEPARTMENT OF ART HISTORY, CONCORDIA UNIVERSITY, MONTREAL, QUEBEC
            </p>
            <p class="description">
                Sarah Nesbitt is an MA candidate in Art History at Concordia University in Montreal. Her current research addresses the relationship between space, identity formation and colonization/decolonization. Sarah is currently engaging the former topics in her Masters thesis, which compares the iconographic and social trajectories of a series of recent interactive settler memorial plaques on Boulevard Saint Laurent street in Montreal, and a large rock placed on the campus of McGill University, which memorializes the historic Haudenosaunee settlement of Hochelaga.

            </p>
            <a href="mailto:jsarah.a.nesbitt@gmail.com" class="emailcontent">sarah.a.nesbitt@gmail.com</a>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $pageBackgroundColor;
    overflow-x: hidden;
    max-width: $maxWidth;
    font-family: $fontFamily;
    text-align: center;
    
}


.image-container {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
   

    img {
        max-width: 100%;
        height: auto;
        display: block;
        
    }
}

.text-container {
    font-family: $fontFamily;
    color: $textFontColor;
    max-width: 800px;
    justify-content: center;
    margin-bottom: $marginBottom;
    text-align: justify;

    .heading {
        color: $titleFontColor;
        margin-top: 10px;
        font-style: italic;
        font-weight: bolder;
        font-size: $fontSize;
    }
    .introduction {
        color: $titleFontColor;
        font-size: 13px;
        font-weight: bold;
    }

    .description {
        font-size: 13px;
        text-align: justify;
    }

    .emailcontent {
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
        margin-top: 2px;
        color: $linkColor;
    }
}

@media (max-width: $smallScreenBreakpoint) {
    .container {
        padding: 0px 20px;
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
        }
    }
}
</style>