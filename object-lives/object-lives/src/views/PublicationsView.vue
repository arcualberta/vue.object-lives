<template>
  <div class="container">
    <div class="image-container">
      <img src="@/assets/Image-02.jpg" alt="Publication" class="img-fluid">
    </div>
    <div class="content-container">
      <p class="text-1">OBJECT LIVES AND GLOBAL HISTORIES IN NORTHERN NORTH AMERICA</p>
      <p class="text-2">MATERIAL CULTURE IN MOTION, C.1780 - 1980</p>
      <p class="editors">Edited by:
        <a href="https://www.mqup.ca/lemire--beverly-contributor-108920.php" target="_blank" rel="noopener noreferrer" class="no-underline">Beverly Lemire</a> ,
        <a href="https://www.mqup.ca/peers--laura-contributor-105515.php" target="_blank" rel="noopener noreferrer" class="no-underline">Laura Peers</a> &amp;
        <a href="https://www.mqup.ca/whitelaw--anne-contributor-117499.php" target="_blank" rel="noopener noreferrer" class="no-underline">Anne Whitelaw
        </a>
        <br>
        <a href="https://www.mqup.ca/object-lives-and-global-histories-in-northern-north-america-products-9780228003984.php#!prettyPhoto" target="_blank" rel="noopener noreferrer">
          McGill - Queen's University Press
        </a>
      </p>
      <p class="text-3">AVAILABLE JANUARY 2021</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $pageBackgroundColor;
  padding: 0 0 40px 0;
  overflow-x: hidden;
  max-width: $maxWidth;
  font-family:$fontFamily;
  text-align: center;
}

.image-container {
  width: $maxWidth;
  overflow: hidden; 
  img {
    max-width: 100%;
    height: 100%;
    margin-top: $marginTop;
    margin-bottom: $marginBottom;
  }
}

.content-container {
  text-align: center;
  font-family: $fontFamily;

  a {
    text-decoration: none;
    color: $linkColor;
    font-size: $fontSize;

    &.no-underline {
      text-decoration: none;
      font-style: italic;
    }

  }

  .editors {
    color: $textFontColor;
  }

  .text-1 {
    font-weight: $headingFontWeight;
    font-size: $headingFontSize;
    margin-bottom: 3px;
    color: $headingColor;
  }

  .text-2 {
    font-weight: $italicFontWeight;
    font-size: $fontSize;
    font-style: italic;
    margin-bottom: 3px;
    color: $textFontColor;
  }

  .text-3 {
    font-weight: $availableFontWeight;
    font-size: $fontSize;
    margin-top: -3px;
    color: $headingColor;
  }

}


@media (max-width: $smallScreenBreakpoint) {
  .container {
    padding: 10px;
    margin-bottom: $marginBottom;
  }
  .content-container {

    .text-1, .text-2, .text-3 {
      font-size: $fontSize;
    }

  }

  .image-container {
     img {
      aspect-ratio: 1/1.1;
      max-height: 50vh;
      max-width: 90vh;
    }
  }
}

</style>
