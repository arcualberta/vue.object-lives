<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-03.gif" alt="Sarah Carter" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                COLLABORATOR
            </h6>
            <p class="introduction">
                PROFESSOR AND HENRY MARSHAL TORY CHAIR <br>DEPARTMENT OF HISTORY & CLASSICS, UNIVERSITY OF ALBERTA
            </p>
            <p class="description">
                Sarah Carter is Professor and Henry Marshall Tory Chair in the Department of History and Classics, and Faculty of Native Studies at the University of Alberta. She has published widely in the history of the Canadian and North American Wests. Books include <i>Lost Harvests: Prairie Indian Reserve Farmers and Government Policy (1990), Capturing Women: The Manipulation of Cultural Imagery in Canada's Prairie West (1997); Aboriginal People and Colonizers of Western Canada (1999); The Importance of Being Monogamous: Marriage and Nation-Building in Western Canada (2008)</i> and <i>Montana Women Homesteaders: A Field of One's Own (2009).</i> Sarah has been co-editor of the <i>Canadian Historical Review,</i> is co-editor of McGill-Queen's University Press Native and Northern Series, and serves on the editorial boards of the David H. Weber Series in the New Borderlands History of North Carolina Press, and<i>Montana: The Magazine of Western History. </i>Recent projects include co-editing (with Maria Nugent) the collection <i>The Mistress of Everything: Queen Victoria and Indigenous History, Policy, and Imagination.</i>
            </p>
            <a href="mailto:sarah.carter@ualberta.ca" class="emailcontent">sarah.carter@ualberta.ca</a>
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