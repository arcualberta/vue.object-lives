<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-11.gif"
        alt="Annette de Stecher"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">
        CONSULTANT (2015 - ) <br />
        COLLABORATOR (2014 - 2015)
      </h6>
      <p class="introduction">
        ASSISTANT PROFESSOR, ART & ART HISTORY DEPARTMENT <br />
        UNIVERSITY OF COLORADO BOULDER, CO, UNITED STATES
      </p>
      <p class="description">
        Annette de Stecher received her doctorate from the Institute for
        Comparative Studies in Literature, Art and Culture at Carleton
        University in 2013. Her areas of expertise include historical Native
        North American visual arts, with a focus on eastern Woodlands and Inuit
        art, material culture research, museum and curatorial studies.
        <br /><br />
        Annette held a Research Fellowship at the Canadian Museum of
        Civilisation and has taught at Carleton, courses relating to historical
        and contemporary Indigenous representation. As Curator of Inuit Art at
        Carleton University Art Gallery, Annette curated the 2013 exhibition,
        <i
          >The Past is Present: Memory and Continuity in the Tyler/Brooks
          Collection of Inuit Art.</i
        >
        <br /><br />
        Annette’s publications include “Souvenir Art, Collectable Craft,
        Cultural Heritage: The Wendat of Wendake Quebec,” in
        <i
          >Craft and Community: the Material Culture of Place and Politics
          (February 2014),</i
        >
        “Integrated Practices: Huron-Wendat Traditions of Diplomacy and
        Museology,” in <i>Journal of Curatorial Studies (April 2014),</i> and
        the forthcoming “Wendat Arts of Diplomacy: Negotiating Change in the
        Nineteenth Century” in <i>Beyond Wendake (February 2015).</i>
      </p>
      <a href="mailto:adestecher@gmail.com" class="emailcontent"
        >adestecher@gmail.com</a
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--page-background-color);
  overflow-x: hidden;
  max-width: var(--max-width);
  font-family: var(--font-family);
  text-align: center;
}

.image-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--margin-bottom);

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
}

.text-container {
  font-family: var(--font-family);
  color: var(--text-font-color);
  max-width: 800px;
  justify-content: center;
  margin-bottom: var(--margin-bottom);
  text-align: justify;

  .heading {
    color: var(--title-font-color);
    margin-top: var(--margin-top);
    font-style: italic;
    font-weight: var(--heading-font-weight);
    font-size: var(--heading-font-size);
  }
  .introduction {
    color: var(--title-font-color);
    font-size: 13px; // Consider using a variable if it needs to be consistent across components
    font-weight: var(--available-font-weight);
  }

  .description {
    font-size: 13px; // Consider using a variable if it needs to be consistent across components
    text-align: justify;
  }

  .emailcontent {
    text-decoration: none;
    font-size: 13px; // Consider using a variable if it needs to be consistent across components
    font-weight: var(--available-font-weight);
    margin-top: var(--margin-top);
    color: var(--link-color);
  }
}

@media (max-width: var(--small-screen-breakpoint)) {
  .container {
    padding: 20px;
  }

  .text-container {
    max-width: 100%;
    text-align: center;
    margin-bottom: var(--margin-bottom);
  }

  .heading,
  .introduction {
    text-align: center;
  }

  .emailcontent {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .image-container {
    img {
      aspect-ratio: 1/0.75;
    }
  }
}
</style>
