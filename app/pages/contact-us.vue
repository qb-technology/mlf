<script lang="ts" setup>
  import type { PageHeroProps } from '~/components/Page/Hero.vue';
  import type { ContactI } from '~/utils/type';

  useHead({
    title: 'Contact Us',
  });

  const page = ref({
    hero: {
      title: "We'd love to hear from you",
      headline: 'Contact Us',
      description:
        'Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.',
      orientation: 'horizontal',
    } as PageHeroProps,
    contact: {
      links: [
        { label: '+233 24723xxx', url: 'tel:+23324723xxx' },
        { label: 'info@mlf.com', url: 'mailto:info@mlf.com' },
      ],
      address: {
        head_office: 'Plt 2 blk c, Adenta, Accra-Ghana',
        branch_office: ['Via Oreto, 90127, Palermo - Italy'],
      },
      social: {
        facebook: '#',
        x: '#',
        linkedin: '#',
      },
    } as ContactI,
  });
</script>

<template>
  <div>
    <div>
      <UContainer>
        <PageHero
          v-bind="page.hero"
          :ui="{
            wrapper: 'col-span-full text-center',
            headline: 'justify-center',
          }"
        >
          <div class="grid order-2 lg:order-none gap-6 sm:gap-7">
            <div class="space-y-4 sm:space-y-5">
              <h3 class="text-base md:text-lg font-semibold">Let's talk!</h3>
              <div class="flex items-center gap-4 flex-wrap w-full">
                <ULink
                  v-for="(val, ind) in [page.contact.links].flatMap((x) => x)"
                  :key="ind"
                  :to="val.url"
                  class="text-xs sm:text-sm"
                >
                  {{ val.label }}
                </ULink>
              </div>
            </div>
            <div class="space-y-4 sm:space-y-5">
              <h3 class="text-base md:text-lg font-semibold">Head Office</h3>
              <div class="flex items-center gap-4 flex-wrap w-full">
                <span
                  v-for="(val, ind) in [
                    page.contact.address.head_office,
                  ].flatMap((x) => x)"
                  :key="ind"
                  class="text-xs sm:text-sm"
                >
                  {{ val }}
                </span>
              </div>
            </div>
            <div class="space-y-4 sm:space-y-5">
              <h3 class="text-base md:text-lg font-semibold">Branch Office</h3>
              <div class="flex items-center gap-4 flex-wrap w-full">
                <span
                  v-for="(val, ind) in [
                    page.contact.address.branch_office,
                  ].flatMap((x) => x)"
                  :key="ind"
                  class="text-xs sm:text-sm"
                >
                  {{ val }}
                </span>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-4 sm:gap-5">
              <UButton
                v-for="([soc, link], index) in Object.entries(
                  page.contact.social,
                )"
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
            </div>
          </div>

          <div class="order-1 lg:order-none">
            <div class="max-w-3xl mx-auto w-full">
              <FormsContact />
            </div>
          </div>
        </PageHero>
      </UContainer>
    </div>

    <PageSection></PageSection>
  </div>
</template>

<style scoped></style>
