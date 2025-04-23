<template>
    <ShopBar />
<br/>
<br/>
<br/>
<br/>
<br/>
    <v-container>
        
        <v-row class="d-flex justify-center">
            <v-col v-for="product in products" :key="product.id" 
            cols="12"
            sm="6"
            md="4"
            lg="3">
                <ProductCard :product="product" :isCheckout="false" />
            </v-col>
        </v-row>

       
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import ShopBar from '../components/ShopBar.vue';


// Sample products
const products = ref([
    { id: 1, name: 'this is a longer name wrpping', price: 29.99, image: 'https://picsum.photos/200/200' },
    { id: 2, name: 'Product 2', extraInfo: "1 Piece", price: 49.99, image: 'https://picsum.photos/200/200' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://picsum.photos/200/200' },
    { id: 4, name: 'Product 4', price: 79.99, image: 'https://picsum.photos/200/200' },
    { id: 5, name: 'Product 5', price: 39.99, image: 'https://picsum.photos/200/200' },
    { id: 6, name: 'Product 6', price: 59.99, image: 'https://picsum.photos/200/200' },
    { id: 7, name: 'Product 7', price: 89.99, image: 'https://picsum.photos/200/200' },
    { id: 8, name: 'Product 8', price: 99.99, image: 'https://picsum.photos/200/200' },
    { id: 9, name: 'Product 9', price: 109.99, image: 'https://picsum.photos/200/200' },
    { id: 10, name: 'Product 10', price: 119.99, image: 'https://picsum.photos/200/200' },
    { id: 11, name: 'Product 11', price: 129.99},
]);


</script>