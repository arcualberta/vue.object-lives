<template>
    <div class="header-container">
      <header class="bg-black text-white py-2">
        <div class="container d-flex justify-content-between align-items-center">
          <h1 class="display-1 header-text">Object lives and Global histories in Northern North America: 1700s - 2000s</h1>
        </div>
      </header>
  
      <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/TheProject" class="nav-link">The Project</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/TheContributors" class="nav-link">The Contributors</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/DiscoveryProcess" class="nav-link">Discovery Process</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/DiscoveryWorkshop" class="nav-link">Discovery Workshop</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Publications" class="nav-link">Publications</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Support" class="nav-link">Support</router-link>
              </li>
            </ul>
          </div>
  
          <div class="social-icons d-none d-lg-flex">
            <a href="https://www.facebook.com/objectlives/" target="_blank" class="social-icon">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FObjectLives" target="_blank" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-x-twitter" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Proxima+Nova&display=swap');
  
  .header-container {
    display: flex;
    flex-direction: column;
  }
  
  header {
    position: relative;
    background-color: black;
  }
  
  h1 {
    font-family: 'Proxima Nova', sans-serif;
    font-size: 30px;
    background-color: rgba(199, 35, 35, 0);
    padding: 3px;
    margin-bottom: -10px;
  }
  
  .navbar {
    background-color: black;
  
    .nav-link {
      &:hover {
        background-color: #333;
      }
    }
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
  
  .social-icons {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-right: 40px;
  }
  
  .social-icon {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s;
  
    &:hover {
      color: #ccc;
    }
  }
  </style>