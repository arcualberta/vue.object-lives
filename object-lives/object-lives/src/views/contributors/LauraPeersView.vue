<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-14.gif" alt="Laura Peers" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                CO-APPLICANT
            </h6>
            <p class="introduction">
                CURATOR OF THE AMERICAS COLLECTION <br>
                PITT RIVERS MUSEUM, OXFORD, UNITED KINGDOM <br>
                PROFESSOR OF MUSEUM ANTHROPOLOGY <br>
                SCHOOL OF ANTHROPOLOGY AND MUSEUM ETHNOGRAPHY <br>
                UNIVERSITY OF OXFORD 
            </p>
            <p class="description">
                Laura Peers is an anthropologist and historian of Indigenous peoples, and combines archival research, material culture research, and collaborative community-based research in her work. A Canadian, she has since 1998 been Curator for the Americas collections at the Pitt Rivers Museum, and a Reader in Material Anthropology in the School of Anthropology and Museum Ethnography, at the University of Oxford. Much of her work at Oxford has involved facilitating reconnections between Indigenous peoples and their material heritage housed in UK museums, and exploring the evolving relations between museums and Indigenous peoples broadly. Dr. Peers is a Fellow of Linacre College, Oxford.
            </p>
            <a href="mailto:laura.peers@prm.ox.ac.uk" class="emailcontent">laura.peers@prm.ox.ac.uk</a>
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