<template>
  <v-app>
    <v-main>
      <div class="page-container">
        <NuxtPage />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  margin: 0 12%;
  max-width: 70vw;

  @include on-media('sm-and-down') {
    max-width: unset;
    margin: 0 1rem;
  }
}
</style>
