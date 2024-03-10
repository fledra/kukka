<template>
  <header class="navigation">
    <NuxtLink to="/" class="navigation-logo text-decoration-none">
      <KukkaLogo :size="56" />
      <h1 class="text-primary">kukka</h1>
    </NuxtLink>

    <i v-if="smAndUp" class="font-weight-light text-subtitle-2">when visual beauty mixes with the musical one</i>
  </header>
</template>

<script setup lang="ts">
const { smAndUp } = useVDisplay();
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 16px;

  @include on-xs {
    justify-content: center;
  }
}

.navigation-logo {
  @include flex-align;

  gap: 12px;
}
</style>
