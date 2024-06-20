<template>
  <div class="container">
    <div class="image-container">
      <img src="@/assets/Image-02.jpg" alt="Publication" class="img-fluid" />
    </div>
    <div class="content-container">
      <p class="text-1">
        OBJECT LIVES AND GLOBAL HISTORIES IN NORTHERN NORTH AMERICA
      </p>
      <p class="text-2">MATERIAL CULTURE IN MOTION, C.1780 - 1980</p>
      <p class="editors">
        Edited by:
        <a
          href="https://www.mqup.ca/lemire--beverly-contributor-108920.php"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
          >Beverly Lemire</a
        >,
        <a
          href="https://www.mqup.ca/peers--laura-contributor-105515.php"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
          >Laura Peers</a
        >
        &amp;
        <a
          href="https://www.mqup.ca/whitelaw--anne-contributor-117499.php"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline"
          >Anne Whitelaw</a
        >
        <br />
        <a
          href="https://www.mqup.ca/object-lives-and-global-histories-in-northern-north-america-products-9780228003984.php#!prettyPhoto"
          target="_blank"
          rel="noopener noreferrer"
        >
          McGill - Queen's University Press
        </a>
      </p>
      <p class="text-3">AVAILABLE JANUARY 2021</p>
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
  padding: 0;
  overflow-x: hidden;
  height: 100vh; // Take full height of the viewport
  font-family: var(--font-family);
  text-align: center;
}

.image-container {
  width: 50%;
  height: 100vh; // Set height to 50% of the viewport
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}

.content-container {
  text-align: center;
  font-family: var(--font-family);

  a {
    text-decoration: none;
    color: var(--link-color);
    font-size: var(--font-size);

    &.no-underline {
      text-decoration: none;
      font-style: italic;
    }
  }

  .editors {
    color: var(--text-font-color);
  }

  .text-1 {
    font-weight: var(--heading-font-weight);
    font-size: var(--heading-font-size);
    margin-bottom: 3px;
    color: var(--heading-color);
  }

  .text-2 {
    font-weight: var(--italic-font-weight);
    font-size: var(--font-size);
    font-style: italic;
    margin-bottom: 3px;
    color: var(--text-font-color);
  }

  .text-3 {
    font-weight: var(--available-font-weight);
    font-size: var(--font-size);
    margin-top: -3px;
    color: var(--heading-color);
  }
}

@media (max-width: var(--small-screen-breakpoint)) {
  .container {
    padding: 10px;
    flex-direction: column;
  }

  .content-container {
    .text-1,
    .text-2,
    .text-3 {
      font-size: smaller; // Adjust font size for smaller screens
    }
  }

  .image-container {
    height: 50vh; // Maintain image height on small screens
  }
}
</style>
