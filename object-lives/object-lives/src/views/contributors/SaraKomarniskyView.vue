<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-05.gif"
        alt="Sarah Komarnisky"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">POST-DOCTORAL FELLOW (2015-2018)</h6>
      <p class="introduction">HISTORY & CLASSICS, UNIVERSITY OF ALBERTA</p>
      <p class="description">
        Sara is an anthropologist whose work explores the everyday experience of
        global and translocal processes in Northern North America. Her current
        project traces the object lives of Aboriginal art and craft made in the
        "contact zone" of occupational therapy programs in TB sanatoria, with
        links to the wider Aboriginal art market and practices of museum
        collecting. The biographies of objects produced at TB hospitals and now
        held in museums contextualize the production, sale, and collection of
        such objects within larger processes of cultural exchange and
        interaction in Northern Canada and globally.
        <br /><br />This research compliments a longstanding interest in
        processes of interaction, migration, and trade between Northern North
        America and locations elsewhere in the continent and around the world.
        Her dissertation,
        <i
          >To Come and Go: Transnational Life Between Mexico and Alaska
          (University of British Columbia 2015),</i
        >
        examines the experiences of place and patterns of transnational mobility
        of three generations of people who have been living between Acuitzio del
        Canje, Michoacán, Mexico and Anchorage, Alaska, USA for several decades.
        Over time, these people orient their lives to both locations as they
        live, work and imagine their futures across the continent. For most of
        them, Acuitzio, Anchorage, and the experience of mobility between the
        two places are necessary to feel at home in the world. <br /><br />Sara
        is also an active member of the Arctic Crossings Network of Scholars of
        the Global Circumpolar North and the Society for the Anthropology of
        North America.
      </p>
      <a href="mailto:sarak@ualberta.ca" class="emailcontent"
        >sarak@ualberta.ca</a
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
