<template>
  <div class="container">
    <div class="image-container">
      <img
        src="@/assets/Contributor-06.gif"
        alt="Katie Pollock"
        class="img-fluid"
      />
    </div>
    <div class="text-container">
      <h6 class="heading">
        COLLABORATOR (2017 - ) <br />
        RESEARCH ASSISTANT (2014 - 2017)
      </h6>
      <p class="introduction">
        CURATOR, CENTRAL ETHNOLOGY <br />
        CANADIAN MUSEUM OF HISTORY, GATINEAU, QUEBEC
      </p>
      <p class="description">
        Katie is the Curator of Central Ethnology at the Canadian Museum of
        History. Her research looks at how the everyday decisions made by
        individuals and families challenged the arbitrary partitioning of
        Indigenous communities by the governments of Canada and the United
        States from the mid-19th century onwards. Her research, which
        criss-crosses the Northern Great Plains and involves working closely
        with Indigenous communities, illuminates a critical connection to place
        — a concept that remains central to her work. Drawing on a material
        culture analysis, she also illustrates the significant role that
        Indigenous women played in the economic survival of family and community
        during this critical period. Looking forward, Pollock seeks to
        illuminate the development of a distinct cottage industry among
        Indigenous women throughout North America’s Northern Great Plains during
        the post-war period. <br />
        <br />
        Born, raised, and rooted in Western Canada, Katie holds a BA in History
        from Brandon University, and an MA and PhD in History from the
        University of Alberta.
      </p>
      <a href="mailto:katie.pollock@historymuseum.ca" class="emailcontent"
        >katie.pollock@historymuseum.ca</a
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
