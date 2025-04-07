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
      title: 'Inclusive care for children with special needs',
      description:
        '‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      orientation: 'horizontal',
      links: [
        {
          label: 'Learn More',
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
      title: 'Some services we provide',
      headline: 'What We Do',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
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
      <PageHero v-bind="page.hero">
        <BaseImagePlaceholder class="w-full" />
      </PageHero>
    </UContainer>

    <PageSection :ui="{ container: 'py-8 sm:py-12 lg:py-16' }">
      <PageLogos v-bind="page.logos" />
    </PageSection>

    <PageSection v-bind="page.about_us">
      <img
        src="https://picsum.photos/704/912"
        width="450"
        height="550"
        alt="Illustration"
        class="w-full rounded-[calc(var(--ui-radius)*2)]"
      />
    </PageSection>

    <div class="bg-(--ui-bg-elevated)/75">
      <PageSection v-bind="page.services">
        <img
          src="https://picsum.photos/704/1294"
          width="352"
          height="647"
          alt="Illustration"
          class="w-full rounded-[calc(var(--ui-radius)*2)]"
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
