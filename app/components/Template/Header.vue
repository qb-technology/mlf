<script lang="ts" setup>
  import type { NavigationMenuItem } from '@nuxt/ui';
  const items = ref<Array<NavigationMenuItem>>([
    {
      label: 'About us',
      to: '#',
    },
    {
      label: 'What we do',
      to: '#',
    },
    {
      label: 'Media',
      to: '#',
    },
    {
      label: 'Contact',
      to: '#',
    },
  ]);
</script>

<template>
  <!-- <UContainer> -->
  <PageHeader>
    <template #title>
      <!-- <NuxtImg src="logo.png" class="w-36 aspect-auto" /> -->
      M.L.F
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <ClientOnly>
        <ColorModeButton />
        <template #fallback>
          <span class="size-8" />
        </template>
      </ClientOnly>
    </template>
  </PageHeader>
  <!-- </UContainer> -->
</template>

<style scoped></style>
