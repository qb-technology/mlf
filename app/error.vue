<script setup lang="ts">
  import type { NuxtError } from '#app';

  defineProps<{
    error: NuxtError;
  }>();
</script>

<template>
  <UApp>
    <UContainer>
      <PageError :error="error" />
    </UContainer>
  </UApp>
</template>
