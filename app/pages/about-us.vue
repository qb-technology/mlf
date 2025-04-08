<script setup lang="ts">
  import type { StepperItem } from '@nuxt/ui';
  import type { BaseAwardsProp } from '~/components/Base/Awards.vue';
  import type { PageCTAProps } from '~/components/Page/CTA.vue';
  import type { PageHeroProps } from '~/components/Page/Hero.vue';
  import type { PageLogosProp } from '~/components/Page/Logos.vue';
  import type { PageSectionProps } from '~/components/Page/Section.vue';
  import type { SocialLinks } from '~/utils/type';

  useHead({
    title: 'About Us',
  });

  type TeamMember = {
    name?: string;
    position?: string;
    social?: SocialLinks;
  };

  const page = ref({
    hero: {
      title: 'Together we build, grow, and inspire',
      headline: 'Know About Us',
      // description:
      //   '‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      orientation: 'horizontal',
    } as PageHeroProps,
    about_us: {
      orientation: 'vertical',
      links: [
        {
          label: 'Learn More',
        },
      ],
      features: [
        {
          title: 'Our Values',
          description:
            'Unity, because we are stronger together. Solidarity, because no one should feel alone. Growth, because everyone deserves opportunities to thrive. Cultural pride, because our roots are a treasure to share.',
          icon: 'i-lucide:hand-heart',
        },
        {
          title: 'Our Mission',
          description:
            'To support and empower the African community in Italy through educational, cultural, and social initiatives that promote integration, solidarity, and social impact.',
          icon: 'i-lucide:target',
        },
        {
          title: 'Our Vision',
          description:
            'To be a welcoming hub for Africans in Italy. A space where people feel seen, supported, and inspired to build a better future together.',
          icon: 'i-lucide:scan-eye',
        },
      ],
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
    awards: {
      orientation: 'vertical',
      reverse: true,
      title: 'Awards & Recognitions',
      // headline: 'What We Do',
      description:
        'We’ve been honored with local recognition for our civic and cultural contributions',
      awards: [
        {
          year: 2021,
          title: 'Best NGO Award',
          place: 'Rome, Italy',
        },
        {
          year: 2018,
          title: 'Global Award',
          place: 'New York, USA',
        },
        {
          year: 2014,
          title: 'Best Association',
          place: 'Palermo, Italy',
        },
        {
          year: 2010,
          title: 'NGO of the year award',
          place: 'Vienna, Austria',
        },
      ],
    } as PageSectionProps & { awards: BaseAwardsProp[] },
    journey: {
      orientation: 'horizontal',
      reverse: false,
      title: 'How Far We have Come',
      description: 'From humble beginnings to impactful growth',
      headline: 'Our Journey',
      features: [
        {
          title: String(Math.abs(new Date().getFullYear() - 2020)) + '+',
          description: 'Years',
          icon: 'i-lucide:calendar-days',
          orientation: 'horizontal',
        },
        {
          title: '400+',
          description: 'Members in 2 continents',
          icon: 'i-lucide:earth',
          orientation: 'horizontal',
        },
        {
          title: '20+',
          description: 'Completed Projects',
          icon: 'i-lucide:building-2',
          orientation: 'horizontal',
        },
      ],
      steps: [
        {
          title: '',
          description: '',
          icon: '',
        },
      ],
    } as PageSectionProps & { steps: Array<StepperItem> },
    team: {
      orientation: 'vertical',
      reverse: false,
      title: 'Meet our team',
      description: 'A passionate, dedicated team leading the mission',
      headline: 'Good people',
      team: [
        {
          name: 'Leonard John Davies',
          position: 'Co-founder, CEO',
          social: { facebook: '', x: '', linkedin: '' },
        },
        {
          name: 'Francis Weber',
          position: 'Vice Chairman',
          social: { facebook: '', x: '', linkedin: '' },
        },
        {
          name: 'Kyla Obrien',
          position: 'Human Resource',
          social: { facebook: '', x: '', linkedin: '' },
        },
        {
          name: 'Dale Banks',
          position: 'Accountant, Finance',
          social: { facebook: '', x: '', linkedin: '' },
        },
        {
          name: 'Miriam Middleton',
          position: 'Public Relations Officer',
          social: { facebook: '', x: '', linkedin: '' },
        },
        {
          name: 'Elliot Walton',
          position: 'CEO, Ghana-Branch',
          social: { facebook: '', x: '', linkedin: '' },
        },
      ],
    } as PageSectionProps & { team: Array<TeamMember> },
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
</script>

<template>
  <div>
    <UContainer>
      <PageHero v-bind="page.hero" :ui="{ title: 'text-4xl sm:text-6xl' }">
        <PageCard
          title="We are a non-governmental organization"
          description="We are a community of Africans in Italy, united by solidarity, culture, and a shared purpose to make a positive impact."
          variant="naked"
          :ui="{
            root: 'h-full',
            title: 'text-xl',
            description: 'text-base mt-2.5',
          }"
        />
        <!-- <BaseImagePlaceholder class="w-full col-span-full"> -->
        <NuxtImg
          :src="getStorageUrl('1-min.jpg')"
          width="450"
          height="550"
          alt="Gathering of people"
          class="w-full col-span-full rounded-[calc(var(--ui-radius)*2)] aspect-video object-cover"
        />
        <!-- </BaseImagePlaceholder> -->

        <PageGrid :ui="{ base: 'col-span-full' }">
          <PageCard
            v-for="(card, index) of page.about_us.features"
            :key="index"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
            variant="ghost"
            :ui="{
              leadingIcon: 'size-10',
            }"
          />
        </PageGrid>

        <PageLogos v-bind="page.logos" class="col-span-full" />
      </PageHero>
    </UContainer>

    <div class="bg-(--ui-bg-elevated)/75">
      <PageSection
        :title="page.awards.title"
        :orientation="page.awards.orientation"
      >
        <PageGrid :ui="{ base: 'lg:grid-cols-4' }">
          <PageCard v-for="(award, ind) in page.awards.awards" :key="ind">
            <BaseAwards v-bind="award" />
          </PageCard>
        </PageGrid>
      </PageSection>
    </div>

    <PageSection v-bind="page.journey">
      <NuxtImg
        :src="getStorageUrl('6-min.jpeg')"
        width="450"
        height="550"
        alt="Gathering of people"
        class="w-full rounded-[calc(var(--ui-radius)*2)] aspect-image object-cover"
      />
    </PageSection>

    <PageSection v-bind="page.team">
      <PageGrid :ui="{ base: '' }">
        <PageCard
          v-for="(user, ind) in page.team.team"
          :key="ind"
          reverse
          :title="user.name"
          :description="user.position"
          variant="naked"
          :ui="{
            footer: 'flex items-center justify-center w-full gap-4',
            wrapper: 'w-full flex justify-center',
            title: 'text-center',
            description: 'text-center',
          }"
        >
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            :alt="user.name"
            class="w-full rounded-[calc(var(--ui-radius)*2)] relative after:absolute after:inset-0 after:bg-black/50"
          />
          <template #footer>
            <template v-if="user.social">
              <UButton
                v-for="([soc, link], index) in Object.entries(user.social)"
                :key="index"
                color="neutral"
                variant="ghost"
                :to="link"
                :icon="
                  soc === 'facebook'
                    ? 'i-simple-icons:facebook'
                    : soc === 'x'
                    ? 'i-simple-icons:x'
                    : 'i-simple-icons:linkedin'
                "
              />
            </template>
          </template>
        </PageCard>
      </PageGrid>
    </PageSection>

    <PageSection>
      <PageCTA v-bind="page.cta"></PageCTA>
    </PageSection>
  </div>
</template>
