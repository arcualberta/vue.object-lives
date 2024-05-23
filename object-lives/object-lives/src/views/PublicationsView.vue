<template>
    <div class="container">
      <div class="content-wrapper">
        <div class="image-container">
          <img src="../assets/Image-02.jpg" alt="Your Image" class="img-fluid">
        </div>
        <div class="content-container">
          <p class="text-1">OBJECT LIVES AND GLOBAL HISTORIES IN NORTHERN NORTH AMERICA</p>
          <p class="text-2">MATERIAL CULTURE IN MOTION, C.1780 - 1980</p>
          <p class="editors">
            Edited by:
            <a href="https://www.mqup.ca/lemire--beverly-contributor-108920.php" target="_blank" rel="noopener noreferrer" class="no-underline italic-link">
              Beverly Lemire
            </a>,
            <a href="https://www.mqup.ca/peers--laura-contributor-105515.php" target="_blank" rel="noopener noreferrer" class="no-underline italic-link">
              Laura Peers 
            </a> &
            <a href="https://www.mqup.ca/whitelaw--anne-contributor-117499.php" target="_blank" rel="noopener noreferrer" class="no-underline italic-link">
              Anne Whitelaw
            </a>
            <br>
            <a href="https://www.mqup.ca/object-lives-and-global-histories-in-northern-north-america-products-9780228003984.php#!prettyPhoto" target="_blank" rel="noopener noreferrer" class="italic-link">
              McGill - Queen's University Press
            </a>
          </p>
          <p class="text-3">AVAILABLE JANUARY 2021</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Proxima+Nova&display=swap');
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .content-wrapper {
    max-width: 800px;
    text-align: center;
    padding: 35px;
  }
  
  .image-container {
    width: 100%;
    overflow: hidden;
  
    img {
      max-width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      margin-bottom: 10px;
    }
  }
  
  .content-container {
    font-family: 'Proxima Nova', sans-serif;
    text-align: center;
  
    a {
      text-decoration: underline;
      color: blue;
      font-size: 15px;
  
      &.no-underline {
        text-decoration: none;
      }
  
      &.italic-link {
        font-style: italic;
        text-decoration: underline;
      }
    }
  
    .text-1 {
      font-weight: bolder;
      font-size: 20px;
      margin-bottom: 3px;
    }
  
    .text-2 {
      font-weight: 800;
      font-size: 15px;
      font-style: italic;
      margin-bottom: 3px;
    }
  
    .text-3 {
      font-weight: bolder;
      font-size: 16px;
      margin-top: -3px;
    }
  }
  
  @media (max-width: 540px) {
    .content-container {
      .text-1 {
        font-size: 18px;
      }
  
      .text-2 {
        font-size: 14px;
      }
  
      .text-3 {
        font-size: 14px;
      }
    }
  
    .image-container {
      img {
        aspect-ratio: 1/1.2; // Adjust the aspect ratio for smaller screens
      }
    }
  }
  </style>