<template>
    <div class="container">
        <div class="image-container">
            <img src="@/assets/Contributor-06.gif" alt="Katie Pollock" class="img-fluid">
        </div>
        <div class="text-container">
            <h6 class="heading">
                COLLABORATOR (2017 - ) <br>
                RESEARCH ASSISTANT (2014 - 2017)
            </h6>
            <p class="introduction">
                CURATOR, CENTRAL ETHNOLOGY <br>
                CANADIAN MUSEUM OF HISTORY, GATINEAU, QUEBEC
            </p>
            <p class="description">
                Katie is the Curator of Central Ethnology at the Canadian Museum of History. Her research looks at how the everyday decisions made by individuals and families challenged the arbitrary partitioning of Indigenous communities by the governments of Canada and the United States from the mid-19th century onwards. Her research, which criss-crosses the Northern Great Plains and involves working closely with Indigenous communities, illuminates a critical connection to place — a concept that remains central to her work. Drawing on a material culture analysis, she also illustrates the significant role that Indigenous women played in the economic survival of family and community during this critical period. Looking forward, Pollock seeks to illuminate the development of a distinct cottage industry among Indigenous women throughout North America’s Northern Great Plains during the post-war period. <br> <br>
                Born, raised, and rooted in Western Canada, Katie holds a BA in History from Brandon University, and an MA and PhD in History from the University of Alberta.
            </p>
            <a href="mailto:katie.pollock@historymuseum.ca" class="emailcontent">katie.pollock@historymuseum.ca</a>
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