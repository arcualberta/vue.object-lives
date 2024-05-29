<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-12.gif" alt="Jonathan Lainey" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                COLLABORATOR
            </h6>
            <p class="introduction">
                CURATOR, FIRST PEOPLES <br>
                CANADIAN MUSEUM OF HISTORY
            </p>
            <p class="description">
                Jonathan Lainey is a member of the Huron-Wendat Nation of Wendake. He studied Anthropology and Native Studies at Laval University (Quebec) and holds a Master’s Degree in History from the same institution. His research interests focus on the social, cultural and political history of Aboriginal peoples of Quebec and Canada, as well as the material culture and its interpretation. His publications include <i>La «monnaie des Sauvages» (2004),</i> which focused on wampum belts and <i>The White Dog Sacrifice: A Post-1800 Rite with an Ornamental Use for Wampum (2013)</i> with Marshall Joseph Becker.

            </p>
            <a href="mailto:jonathan.lainey@historymuseum.ca" class="emailcontent">jonathan.lainey@historymuseum.ca</a>
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
        margin-left: 160px;
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