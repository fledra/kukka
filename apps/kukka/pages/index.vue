<template>
  <div class="d-flex flex-column justify-center align-center flex-grow-1 w-100">
    <h2 class="mb-3 text-center">{{ message }}</h2>

    <div class="song-input">
      <v-text-field variant="solo-filled" autofocus clearable>
        <template #prepend-inner>
          <Icon name="i-fluent-emoji-high-contrast:musical-notes" class="ml-2 mr-3" />
        </template>
      </v-text-field>
    </div>

    <div class="buttons">
      <v-btn>search</v-btn>
      <v-btn>luck be a lady tonight</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const messages = ['what are we listening to today?', "what's playing?"];
const message = useState('message', () => messages[Math.floor(Math.random() * messages.length)]);
</script>

<style lang="scss" scoped>
.song-input {
  width: 50%;

  @include on-md {
    width: 65%;
  }

  @include on-sm {
    width: 80%;
  }

  @include on-xs {
    width: 100%;
  }
}

.buttons {
  display: flex;
  gap: 1rem;
}
</style>
