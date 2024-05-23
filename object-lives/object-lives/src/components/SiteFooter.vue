<template>
    <footer class="bg-black text-white py-2 text-center"> <!-- Reduced padding-top and padding-bottom -->
      <div class="container">
        <div class="social-icons d-lg-none mb-2"> <!-- Reduced bottom margin -->
          <a href="https://www.facebook.com/objectlives/" target="_blank" class="social-icon">
            <font-awesome-icon icon="fa-brands fa-facebook-f" size="lg" /> <!-- Reduced icon size -->
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FObjectLives" target="_blank" class="social-icon">
            <font-awesome-icon icon="fa-brands fa-x-twitter" size="lg" /> <!-- Reduced icon size -->
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts"></script>
  
  <style lang="scss" scoped>
  .social-icons {
    display: flex;
    align-items: center;
    gap: 20px; 
    margin-right: 20px;
    margin-left: 20px; 
  }
  
  .social-icon {
    color: #fff;
    font-size: 13px;
    transition: color 0.3s;
  
    &:hover {
      color: #ccc;
    }
  }
  
  @media (max-width: 991px) {
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  
    .social-icons {
      justify-content: center;
    }
  }
  </style>