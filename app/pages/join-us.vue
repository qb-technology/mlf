<script lang="ts" setup>
  import type { PageHeroProps } from '~/components/Page/Hero.vue';

  useHead({
    title: 'Join Us',
  });

  const page = ref({
    hero: {
      title: 'Become Part of Us',
      description:
        'Our doors are always open to warmly receive you to become a part of us',
      orientation: 'horizontal',
      headline: 'Welcome',
    } as PageHeroProps,
  });
</script>

<template>
  <div>
    <UContainer class="">
      <PageHero v-bind="page.hero" class="">
        <FormsJoinUs />
      </PageHero>
    </UContainer>
  </div>
</template>

<style scoped></style>
