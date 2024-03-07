<template>
  <v-app>
    <v-main>
      <v-container class="page-container">
        <Navigation />
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-container {
  @include on-xl-up {
    max-width: 70vw;
  }
}
</style>
