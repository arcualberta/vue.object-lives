<template>
    <footer class="bg-black text-white py-3 text-center">
      <div class="container">
        <div class="social-icons d-lg-none mb-3">
          <a href="https://www.facebook.com/objectlives/" target="_blank" class="social-icon">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FObjectLives" target="_blank" class="social-icon">
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
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