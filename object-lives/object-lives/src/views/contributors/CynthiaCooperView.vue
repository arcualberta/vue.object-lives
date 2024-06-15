<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-10.gif"
        alt="Cynthia Cooper"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">COLLABORATOR</h6>
      <p class="introduction">
        HEAD OF COLLECTIONS AND RESEARCH AND CURATOR OF COSTUME AND TEXTILES
        <br />
        MCCORD MUSEUM, MONTREAL, QUEBEC
      </p>
      <p class="description">
        Cynthia Cooper is Head, Collections and Research, and Curator, Costume
        and Textiles, at the McCord Museum in Montreal, where she oversees the
        largest museum collection of Canadian dress, consisting of 18,000 items.
        She holds a M.S. in Historic Costume and Textiles from the University of
        Rhode Island. She received the Richard Martin Exhibition Award from the
        Costume Society of America in 2009 for the McCord exhibition
        <i>Reveal or Conceal?</i> and in 2004 as a member of the curatorial team
        of <i>Clothes Make the MAN.</i>She is the author of
        <i
          >Magnificent Entertainments: Fancy Dress Balls of Canada’s Governors
          General (Goose Lane Editions, 1997)</i
        >
        and has contributed to other books including
        <i
          >The Berg Encyclopedia of World Dress and Fashion (Berg, 2010), The
          Fashion Reader (Berg, 2011), and Fashion: A Canadian Perspective (UTP,
          2004).</i
        >
        She has taught courses on the intersections between fashion and art, and
        on fashion history in Concordia University’s Faculty of Fine Arts and
        Department of Art History.
      </p>
      <a href="mailto:cynthia.cooper@mccord.mcgill.ca" class="emailcontent"
        >cynthia.cooper@mccord.mcgill.ca</a
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
