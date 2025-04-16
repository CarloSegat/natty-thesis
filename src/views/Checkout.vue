<template>
    <v-container class="pa-5">
        <v-row>
            <v-col v-for="product in cartStore.cart" :key="product.id" cols="12" md="4">
                <ProductCard :product="product"  />
            </v-col>
        </v-row>
  
      <v-btn color="primary" @click="checkout" class="mt-4" block>
        Proceed to Checkout
      </v-btn>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import ProductCard from '../components/ProductCard.vue';
  import { useCartStore } from '../store/cart.js'

const cartStore = useCartStore()
  
  const router = useRouter();
  
  const cart = ref([]);
  
  const checkout = () => {
    console.log(cart.value);
    
    router.push('/goodbye'); // Navigate to the Goodbye page
  };
  </script>
  