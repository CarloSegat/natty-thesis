<template>
  <div class="font-sans bg-gray-50">
    <!-- Global header or navigation, if any -->
    <!-- <header class="bg-blue-500 text-white p-4 text-center">
      <h1 class="text-2xl font-bold">Product Packaging Research</h1>
    </header> -->

    <!-- Main content area for views -->
    <main>
      <router-view /> <!-- This is where the routed view (Home, Shop, Checkout, etc.) will be injected -->
    </main>

    <!-- Optionally, a footer with a thank-you message or contact info -->
    <footer class="bg-blue-500 text-white text-center p-4 mt-4">
      <p>&copy; 2025 Research Prototype</p>
    </footer>
  </div>
</template>

<script setup>
  // No script logic needed here for now
</script>

<style>
/* Global styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f3f4f6;
}
</style>
