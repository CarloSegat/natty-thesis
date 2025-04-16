<template>
    <header>
      <!-- Top Bar -->
      <div class="top-bar">
        TEST_SHOP
      </div>
  
      <!-- Cart Bar -->
      <div class="cart-bar">
        <div class="cart-content">
          <span class="cart-count">{{ cartCount }}</span>
          <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M7,18A2,2 0 1,0 9,20A2,2 0 0,0 7,18M1,2V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.28,15 7.17,14.89 7.17,14.75L7.2,14.65L8.1,13H14.55A2,2 0 0,0 16.3,11.29L20.88,4.85C21,4.65 21,4.41 21,4.18A1,1 0 0,0 20,3H5.21L4.27,1H1M17,18A2,2 0 1,0 19,20A2,2 0 0,0 17,18Z" />
          </svg>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useCartStore } from '../store/cart.js'
  
  const cartStore = useCartStore()
  
  // Reactive cart count from the store
  const cartCount = computed(() => cartStore.cart.length)
  </script>
  
  <style scoped>
  header {
    width: 100%;
  }
  
  /* Top bar styling */
  .top-bar {
    background-color: #3f51b5;
    color: white;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  /* Cart bar styling */
  .cart-bar {
    background-color: transparent;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .cart-content {
    display: flex;
    align-items: center;
  }
  
  .cart-count {
    margin-right: 0.5rem;
    font-weight: bold;
  }
  
  .cart-icon {
    fill: currentColor;
  }
  </style>
  