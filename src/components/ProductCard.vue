<template>
    <div class="card-container">
        <img :src="product.image" />

        <b>{{ product.name }}</b>

        <div>{{ product.extraInfo }}</div>

        <span class="right-aligned" style="color:#007bff;">
            €{{ product.price.toFixed(2) }}
        </span>
        
        <button v-if="!isCheckout" @click.stop="addToCart">
            <v-icon>mdi-cart-outline</v-icon> <v-icon >mdi-plus</v-icon>
        </button>

        <!-- <div class="d-flex flex-column align-end">
            <span class="text-h6 text-red-darken-2">
                €{{ product.price.toFixed(2) }}
            </span>
            
            <button v-if="!isCheckout" @click.stop="addToCart" color="#ff0000" class="rounded-lg px-1 py-1 bg-red-darken-2">
                <v-icon color="white" >mdi-cart-outline</v-icon> <v-icon color="white" >mdi-plus</v-icon>
            </button>
        </div> -->
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define the props coming from the parent component (Shop.vue)
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
    isCheckout: {
        type: Boolean,
        default: false,
    },
});

// Define the event that will be emitted when a product is added to the cart
const emit = defineEmits(['add-to-cart']);

// Method to emit the event to the parent component (Shop.vue)
const addToCart = () => {
    emit('add-to-cart', props.product);
};
</script>

<style scoped>

.card-container {
  display: flex;
  flex-direction: column;
  width: 200px; /* Adjust as necessary */
  border: 1px solid #ccc;
  border-radius: 8px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  padding: 5px;
}

.card-container .right-aligned {
  text-align: right;
}

.card-container button {
  display: inline-block;
  padding: 4px;
  background-color: #007bff;
  color: white;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 5px;
}

</style>