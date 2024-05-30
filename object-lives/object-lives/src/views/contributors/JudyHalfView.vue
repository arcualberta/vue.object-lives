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