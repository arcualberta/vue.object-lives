<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-02.gif"
        alt="Susan Berry"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">COLLABORATOR</h6>
      <p class="introduction">
        CURATOR OF ETHNOLOGY AND HEAD OF CULTURAL STUDIES <br />ROYAL ALBERTA
        MUSEUM, EDMONTON, ALBERTA
      </p>
      <p class="description">
        Susan Berry is the Curator of Ethnology and Head of Cultural Studies at
        the Royal Alberta Museum. Since joining the Museum in 1994, she has
        co-curated the Museum's Gallery of Aboriginal Culture as well as several
        smaller exhibits, including
        <i>Stories from the Southesk Collection: A 150-Year Journey.</i> Her
        publications include
        <i
          >“Recovered Identities: Four Métis Artists in 19th-century Rupert's
          Land”,</i
        >
        in
        <i
          >Recollecting: Lives of Aboriginal Women of the Canadian Northwest and
          Borderlands,</i
        >
        eds. Sarah Carter and Patricia McCormack, and<i>
          Aboriginal Cultures in Alberta: Five Hundred Generations (co-authored
          with Jack Brink).</i
        >
        Susan’s research interests focus on material culture of the northwestern
        Plains and Subarctic and on interconnections among objects, biography,
        and social process.
      </p>
      <a href="mailto:susan.berry@gov.ab.ca" class="emailcontent"
        >susan.berry@gov.ab.ca</a
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
