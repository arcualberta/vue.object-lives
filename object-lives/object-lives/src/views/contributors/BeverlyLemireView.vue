<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-01.gif"
        alt="Beverly Lemire"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">PRINCIPAL INVESTIGATOR</h6>
      <p class="introduction">
        PROFESSOR AND HENRY MARSHALL TORY CHAIR <br />
        DEPARTMENT OF HISTORY & CLASSICS, UNIVERSITY OF ALBERTA
      </p>
      <p class="description">
        Beverly Lemire is Professor and Henry Marshall Tory Chair in the
        Department of History & Classics, University of Alberta. She is the
        Principal Investigator on this project. Beverly has published
        extensively on fashion, consumerism, material culture and gender history
        in Britain, as well as on comparative early globalization (1500-1820)
        and consumerism. Selected books include:
        <i
          >Fashion's Favourite: The Cotton Trade and the Consumer in Britain,
          1660-1800, (1991); Dress, Culture and Commerce: the English Clothing
          Trade before the Factory, (1997);The Business of Everyday Life
          (2005).</i
        >
        And, most recently:
        <i
          >The Force of Fashion in Politics and Society (2010), Cotton (2011)</i
        >
        and a co-edited volume,<i
          >Craft, Community and the Material Culture of Place and Politics, 19th
          and 20th Century (2014).</i
        >
      </p>
      <a href="mailto:lemire@ualberta.ca" class="emailcontent"
        >lemire@ualberta.ca</a
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
