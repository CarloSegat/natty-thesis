<template>
  <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
    <v-card class="pa-5" max-width="400" elevation="2">
      <v-card-title class="headline text-center">
        Thank You for Participating!
      </v-card-title>
      <v-card-subtitle class="text-center">
        Your feedback has been incredibly helpful.
      </v-card-subtitle>

      <v-card-text class="text-center">
        We appreciate you taking the time to participate in our experiment. Based on your preferences, we will continue improving our platform to provide you with a better user experience. Your choices will help us optimize the interface, recommend products, and personalize your shopping journey.
      </v-card-text>

    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const finishExperiment = () => {
  // Here you can redirect or perform any actions after the user finishes the experiment
  localStorage.removeItem('userName'); // Optional: remove any stored data
  router.push('/thank-you'); // Redirect to a thank-you page or another relevant page
};
</script>

<style scoped>
.v-card {
  max-width: 500px;
}

.v-card-text {
  margin-top: 20px;
  font-size: 14px;
}
</style>
