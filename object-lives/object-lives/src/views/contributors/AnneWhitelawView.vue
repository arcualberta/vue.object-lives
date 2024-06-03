<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-08.gif" alt="Anne Whitelaw" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                CO-APPLICANT
            </h6>
            <p class="introduction">
                VICE-PROVOST PLANNING AND POSITIONING <br>
                PROFESSOR OF ART HISTORY <br>
                FACULTY OF FINE ARTS, CONCORDIA UNIVERSITY
            </p>
            <p class="description">
                Anne Whitelaw is Vice-Provost Planning and Positioning and Professor of Art History in the Faculty of Fine Arts at Concordia University. Her research examines the intersections of art historiography and cultural institutions in Canada, with a particular focus on practices of exhibition and collecting as a means of understanding the formation of nationhood. She has published extensively on the display of Canadian art at the National Gallery of Canada, on the integration of Aboriginal art into the permanent displays of national museums, and on the work of women in North American art galleries. She is the co-editor with Brian Foss and Sandra Paikowsky of <i>The Visual Arts in Canada: The Twentieth Century (Oxford UP, 2010)</i> and recently completed a book manuscript on the development of art galleries in Western Canada. In addition to her participation in the Object Lives and Global Histories project, she is a member of an international group of scholars exploring the writing of art history in settler-colonial countries.
            </p>
            <a href="mailto:anne.whitelaw@concordia.ca" class="emailcontent">anne.whitelaw@concordia.ca</a>
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