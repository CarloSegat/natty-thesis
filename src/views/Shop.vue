<template>
          <ShopBar />
    <v-container class="pa-5">
        
       
      
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" md="4">
                <ProductCard :product="product" :isCheckout="false" />
            </v-col>
        </v-row>

        <!-- Checkout Button -->
        <v-btn color="secondary" @click="goToCart" class="fixed-bottom-right m-4">
            CHECKOUT
        </v-btn>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { useRouter } from 'vue-router';
import ShopBar from '../components/ShopBar.vue';

const router = useRouter();

// Sample products
const products = ref([
    { id: 1, name: 'this is a longer name wrpping', price: 29.99, image: 'https://picsum.photos/200/200' },
    { id: 2, name: 'Product 2', extraInfo: "1 Piece", price: 49.99, image: 'https://picsum.photos/200/200' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://picsum.photos/200/200' },
    { id: 4, name: 'Product 4', price: 79.99, image: 'https://picsum.photos/200/200' },
]);

const cart = ref([]);

const goToCart = () => {
    router.push('/checkout'); // Navigate to the checkout page
};
</script>