import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  // Function to add product to the cart
  function addToCart(product) {
    cart.value.push(product)
    console.log(">>>", cart.value);
    
  }

  return {
    cart,
    addToCart
  }
})
