<script setup lang="ts">
  import type { PageCTAProps } from '~/components/Page/CTA.vue';
  import type { PageHeroProps } from '~/components/Page/Hero.vue';
  import type { PageLogosProp } from '~/components/Page/Logos.vue';
  import type { PageSectionProps } from '~/components/Page/Section.vue';

  useHead({
    title: 'Homepage',
  });

  const page = ref({
    hero: {
      title: 'Empowering African Expats. Enriching Communities in Italy',
      description:
        'We are a united community of African expatriates in Italy, working together to support each other and make a positive impact through service, outreach, education, and cultural programs.',
      orientation: 'vertical',
      links: [
        {
          label: 'Join Us',
          to: '/join-us',
          variant: 'solid',
          color: 'neutral',
          icon: 'i-lucide:heart-handshake',
        },
        {
          label: 'What we do',
          to: '/what-we-do',
          variant: 'ghost',
          color: 'neutral',
          icon: 'i-lucide-hand-helping',
        },
      ],
    } as PageHeroProps,
    about_us: {
      headline: 'About Us',
      title: 'A big family across many nations',
      description:
        'Martin Luther Foundation is a non-profit association created by Africans living in Italy. Our aim is simple: to uplift each other and our communities through collaboration, empowerment, and cultural pride. We believe in the power of unity and service, and we are committed to building bridges between cultures, supporting fellow expats, and making a lasting difference in the places we live.',
      orientation: 'horizontal',
      links: [
        {
          label: 'Learn More',
          to: '/about-us',
        },
      ],
      // features: [
      //   {
      //     title: 'Our Mission',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      //     icon: 'i-lucide:heart-pulse',
      //   },
      //   {
      //     title: 'Our Vision',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      //     icon: 'i-lucide:heart-handshake',
      //   },
      //   {
      //     title: 'Scholarships',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      //     icon: 'i-lucide:school',
      //   },
      //   {
      //     title: 'Documentation assistance',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      //     icon: 'i-lucide:file-text',
      //   },
      // ],
    } as PageSectionProps,
    logos: {
      title: 'Our Partners & Supporters',
      items: [
        'i-lucide:github',
        'i-lucide:facebook',
        'i-simple-icons:google',
        'i-simple-icons:x',
        'i-simple-icons:discord',
      ],
    } as PageLogosProp,
    services: {
      orientation: 'horizontal',
      reverse: true,
      title: 'Making a better world',
      headline: 'Our pride',
      features: [
        {
          title: 'Health benefits',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:heart-pulse',
        },
        {
          title: 'Family support',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:heart-handshake',
        },
        {
          title: 'Scholarships',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:school',
        },
        {
          title: 'Documentation assistance',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          icon: 'i-lucide:file-text',
        },
      ],
      links: [
        {
          label: 'Learn More',
          to: '/what-we-do',
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
      <PageHero v-bind="page.hero">
        <!-- <BaseImagePlaceholder class="w-full" /> -->
        <VideoPlayer
          src="https://mlf.qbtech.dev/final.mp4"
          :controls="true"
          :autoplay="false"
        />
      </PageHero>
    </UContainer>

    <PageSection :ui="{ container: 'py-8 sm:py-12 lg:py-16' }">
      <PageLogos
        v-bind="page.logos"
        marquee
        :ui="{ logo: 'size-8 md:size-10' }"
      />
    </PageSection>

    <PageSection v-bind="page.about_us">
      <NuxtImg
        :src="getStorageUrl('big-family-nations.jpg')"
        width="450"
        height="550"
        alt="Gathering of people"
        class="w-full rounded-[calc(var(--ui-radius)*2)] object-cover"
      />
    </PageSection>

    <div class="bg-(--ui-bg-elevated)/75">
      <PageSection v-bind="page.services">
        <NuxtImg
          :src="getStorageUrl('better_world.jpeg')"
          alt="working in the community"
          class="w-full rounded-[calc(var(--ui-radius)*2)] h-full object-cover"
        />
      </PageSection>
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
