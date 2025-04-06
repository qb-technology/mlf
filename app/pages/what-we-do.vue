<script setup lang="ts">
  import type { PageCTAProps } from '~/components/Page/CTA.vue';
  import type { PageHeroProps } from '~/components/Page/Hero.vue';
  import type { PageSectionProps } from '~/components/Page/Section.vue';

  useHead({
    title: 'What We Do',
  });

  const page = ref({
    hero: {
      title: 'Serving communities across continents',
      headline: 'Impact',
      description:
        'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      orientation: 'horizontal',
    } as PageHeroProps,
    services: {
      headline: 'What we do',
      title: 'Services we provide',
      icon: 'i-lucide:activity',
      orientation: 'vertical',
      // links: [
      //   {
      //     label: 'Learn More',
      //   },
      // ],
      features: [
        {
          title: 'Health benefits',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:heart-pulse',
          ui: { leadingIcon: 'size-8' },
        },
        {
          title: 'Family support',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:heart-handshake',
          ui: { leadingIcon: 'size-8' },
        },
        {
          title: 'Scholarships',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:school',
          ui: { leadingIcon: 'size-8' },
        },
        {
          title: 'Documentation assistance',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:file-text',
          ui: { leadingIcon: 'size-8' },
        },
        {
          title: 'Legal assistance',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-map:lawyer',
          ui: { leadingIcon: 'size-8' },
        },
        {
          title: 'Education',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-hugeicons:global-education',
          ui: { leadingIcon: 'size-8' },
        },
      ],
    } as PageSectionProps,
    projects: {
      orientation: 'vertical',
      reverse: false,
      title: 'We are creating a place where everyone can thrive',
      headline: 'Projects',
    } as PageSectionProps,
    cta: {
      title: 'You can contribute to making society better for all of us',
      variant: 'naked',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      links: [
        {
          label: 'Join us today',
          color: 'primary',
          variant: 'solid',
          to: '#',
          size: 'lg',
        },
        {
          label: 'Donate',
          color: 'neutral',
          variant: 'solid',
          to: '#',
          size: 'lg',
        },
      ],
    } as PageCTAProps,
  });

  const projects = ref([
    {
      title: 'Mission smile 1k: Outdoor charity',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      link: '#',
    },
    {
      title: 'Excursions & Games',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      link: '#',
    },
    {
      title: 'Monthly public awareness',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      link: '#',
    },
  ]);
</script>

<template>
  <div>
    <UContainer>
      <PageHero v-bind="page.hero" :ui="{ title: 'text-4xl sm:text-6xl' }">
        <BaseImagePlaceholder class="w-full" />
      </PageHero>
    </UContainer>

    <div class="bg-(--ui-bg-elevated)/75">
      <PageSection v-bind="page.services" />
    </div>

    <PageSection v-bind="page.projects">
      <PageGrid>
        <PageCard
          v-for="(proj, ind) of projects"
          :key="ind"
          :title="proj.title"
          :description="proj.description"
          :to="proj.link"
          variant="subtle"
          reverse
        >
          <img
            src="https://picsum.photos/500/500"
            :alt="proj.title"
            class="w-full rounded-[calc(var(--ui-radius)*2)] relative after:absolute after:inset-0 after:bg-black/50"
          />
        </PageCard>
      </PageGrid>
    </PageSection>

    <PageSection>
      <PageCTA v-bind="page.cta"></PageCTA>
    </PageSection>
  </div>
</template>
