<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-04.gif"
        alt="Judy Half"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">COLLABORATOR</h6>
      <p class="introduction">
        PHD CANDIDATE<br />
        DEPARTMENT OF ANTHROPOLOGY & ARCHAEOLOGY, UNIVERSITY OF CALGARY
      </p>
      <p class="description">
        Judy Half originates from the Saddle Lake First Nation. It is located in
        the heart of Treaty Six Cree landscape. In the community she observed
        many of its economic, social and political events, and participated in
        many cultural and ceremonial practices that in which she applies to the
        artifacts research and cultural interpretations within museums through
        presentations.
        <br /><br />In 1989, she attended the University of Alberta and
        graduated in 1994 with Bachelor in Natives Studies and Anthropology.
        Thereafter, she attained her field work in archaeology and in First
        Nations Governance and is in completion of a dual master’s program in
        Heritage Resource Management and Integrated Studies through Athabasca
        University. <br /><br />She is involved with First Nations communities
        as Repatriation Officer for Alberta Government and is community liaison
        for other Aboriginal communities to interpret Cree culture, and is
        working with Edmonton Heritage Council as a Board of Governors. She is
        also a member to the Alberta Museum Association, Canadian Museum
        Association and ICOMOS.
      </p>
      <a href="mailto:judy.half@ucalgary.ca" class="emailcontent"
        >judy.half@ucalgary.ca</a
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
