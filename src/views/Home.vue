<template>
    <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
      <v-card class="pa-5" max-width="400" elevation="2">
        <v-card-title class="headline text-center">
          Welcome to the eCommerce Prototype
        </v-card-title>
        <v-card-subtitle class="text-center">
          Please enter your name to start shopping.
        </v-card-subtitle>
  
        <v-form @submit.prevent="startShopping">
          <v-text-field
            v-model="userName"
            label="Your Name"
            outlined
            dense
            class="mt-4"
            :rules="[nameRules]"
            required
          ></v-text-field>
  
          <v-btn
            :disabled="!userName"
            color="primary"
            block
            class="mt-4"
            @click="startShopping"
          >
            Start Shopping
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const userName = ref('');
  const router = useRouter();
  
  // Rules for the name input field (optional)
  const nameRules = [(v) => !!v || 'Name is required'];
  
  const startShopping = () => {    
    if (userName.value) {
      localStorage.setItem('userName', userName.value); // Store the name locally
      router.push('/shop'); // Redirect to the shop page
    }
  };

  onMounted(
    () => {
      localStorage.setItem('cart', JSON.stringify([]));
      // userName.value = "testName"
      // startShopping()
    }
  );
  
  </script>
  
  <style scoped>
  .v-card {
    max-width: 500px;
  }
  </style>
  