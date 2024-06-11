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
    margin-bottom: $marginBottom;
   

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
    margin-bottom: 80px;
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