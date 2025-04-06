<script lang="ts" setup>
  import type { NavigationMenuItem } from '@nuxt/ui';
  const items = ref<Array<NavigationMenuItem>>([
    {
      label: 'About us',
      to: '/about-us',
    },
    {
      label: 'What we do',
      to: '/what-we-do',
    },
    {
      label: 'Gallery',
      to: '/gallery',
    },
    {
      label: 'Contact',
      to: '#',
    },
  ]);
</script>

<template>
  <!-- <UContainer> -->
  <PageHeader :ui="{ title: 'max-w-[200px] text-base' }">
    <template #title>
      <!-- <NuxtImg src="logo.png" class="w-36 aspect-auto" /> -->
      <div class="flex items-start gap-2">
        <UIcon name="i-lucide:earth" class="size-7" />
        <span class="wrap-normal">Martin Luther Foundation</span>
      </div>
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <ClientOnly>
        <ColorModeButton />
        <template #fallback>
          <span class="size-8" />
        </template>
      </ClientOnly>
      <UButton
        variant="solid"
        color="neutral"
        icon="i-lucide:heart-handshake"
        label="Join Us"
      />
    </template>
  </PageHeader>
  <!-- </UContainer> -->
</template>

<style scoped></style>
