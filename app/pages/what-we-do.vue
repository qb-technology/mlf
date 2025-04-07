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
        'From the heart of Italy to the spirit of Africa, our work bridges communities through service, culture, and compassion. We are committed to uplifting lives and creating lasting connections — across borders and beyond.',
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
      title: 'Our Impact in Action',
      headline: 'Projects',
    } as PageSectionProps,
    cta: {
      title: 'Ready to Make a Difference?',
      variant: 'subtle',
      description:
        "Join a growing network of African expats working to support each other and contribute to a better community. Whether you want to volunteer, participate in events, or simply connect — there's a place for you.",
      links: [
        {
          label: 'Join us today',
          color: 'primary',
          variant: 'solid',
          to: '/join-us',
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
      title: 'Neighborhood Clean-up Days',
      description:
        'Regular volunteer-led clean-ups in collaboration with local authorities',
      link: '#',
      image: getStorageUrl('10-min.jpeg'),
    },
    {
      title: 'Outdoor Activities & Games',
      description:
        'Regular health-focused activities to promote togetherness and health awareness.',
      link: '#',
      image: getStorageUrl('11-min.jpeg'),
    },
    {
      title: 'Language & Job Readiness Workshops',
      description:
        'Helping members improve Italian proficiency and job-seeking skills.',
      link: '#',
      image: getStorageUrl('5-min.jpeg'),
    },
  ]);
</script>

<template>
  <div>
    <UContainer>
      <PageHero v-bind="page.hero" :ui="{ title: 'text-4xl sm:text-6xl' }">
        <NuxtImg
          :src="getStorageUrl('13-min.jpg')"
          width="450"
          height="550"
          alt="Gathering of people"
          class="w-full rounded-[calc(var(--ui-radius)*2)] aspect-image object-cover"
        />
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
          <NuxtImg
            :src="proj.image"
            :alt="proj.title"
            class="w-full rounded-[calc(var(--ui-radius)*2)] aspect-image object-cover"
          />
        </PageCard>
      </PageGrid>
    </PageSection>

    <PageSection>
      <PageCTA v-bind="page.cta"></PageCTA>
    </PageSection>
  </div>
</template>
