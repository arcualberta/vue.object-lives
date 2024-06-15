<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-03.gif"
        alt="Sarah Carter"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">COLLABORATOR</h6>
      <p class="introduction">
        PROFESSOR AND HENRY MARSHAL TORY CHAIR <br />DEPARTMENT OF HISTORY &
        CLASSICS, UNIVERSITY OF ALBERTA
      </p>
      <p class="description">
        Sarah Carter is Professor and Henry Marshall Tory Chair in the
        Department of History and Classics, and Faculty of Native Studies at the
        University of Alberta. She has published widely in the history of the
        Canadian and North American Wests. Books include
        <i
          >Lost Harvests: Prairie Indian Reserve Farmers and Government Policy
          (1990), Capturing Women: The Manipulation of Cultural Imagery in
          Canada's Prairie West (1997); Aboriginal People and Colonizers of
          Western Canada (1999); The Importance of Being Monogamous: Marriage
          and Nation-Building in Western Canada (2008)</i
        >
        and
        <i>Montana Women Homesteaders: A Field of One's Own (2009).</i> Sarah
        has been co-editor of the <i>Canadian Historical Review,</i> is
        co-editor of McGill-Queen's University Press Native and Northern Series,
        and serves on the editorial boards of the David H. Weber Series in the
        New Borderlands History of North Carolina Press, and<i
          >Montana: The Magazine of Western History. </i
        >Recent projects include co-editing (with Maria Nugent) the collection
        <i
          >The Mistress of Everything: Queen Victoria and Indigenous History,
          Policy, and Imagination.</i
        >
      </p>
      <a href="mailto:sarah.carter@ualberta.ca" class="emailcontent"
        >sarah.carter@ualberta.ca</a
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
