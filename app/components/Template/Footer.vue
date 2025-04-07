<script setup lang="ts">
  const columns = [
    {
      label: 'Pages',
      children: [
        {
          label: 'Our Story',
          to: '/about-us',
        },
        {
          label: 'Projects',
          to: '/what-we-do',
        },
        {
          label: 'Partner with us',
          to: '#',
        },
      ],
    },
    {
      label: 'Others',
      children: [
        {
          label: 'Blogs',
          to: '#',
        },
        {
          label: 'Volunteer',
          to: '/join-us',
        },
        {
          label: 'Career',
          to: '#',
        },
      ],
    },
  ];
</script>

<template>
  <PageFooter>
    <template #top>
      <UContainer>
        <FooterColumns
          :columns="columns"
          :ui="{
            root: 'grid gap-8 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5',
            wrapper: 'flex flex-col items-center lg:block',
            item: 'text-center lg:text-start',
            center:
              'grid justify-center order-first lg:order-none col-span-full lg:col-span-2 xl:col-span-3',
            left: 'order-last sm:order-none col-span-full sm:col-span-1 mt-10 mb-0',
            right: 'col-span-full sm:col-span-1',
          }"
        >
          <template #right>
            <UFormField
              name="email"
              label="Subscribe to our newsletter"
              size="lg"
            >
              <UInput type="email" class="w-full">
                <template #trailing>
                  <UButton
                    type="submit"
                    size="xs"
                    color="neutral"
                    label="Subscribe"
                  />
                </template>
              </UInput>
            </UFormField>
          </template>
          <template #left>
            <Logo />
          </template>
        </FooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-(--ui-text-muted) text-sm">
        Copyright © {{ new Date().getFullYear() }} QB Technology | All rights
        reserved
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-facebook"
        color="neutral"
        variant="ghost"
        to="https://www.facebook.com/share/14Gwn284NrR/"
        target="_blank"
        aria-label="Facebook"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://x.com/nuxt_js"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-instagram"
        color="neutral"
        variant="ghost"
        to="https://www.instagram.com/qbtechnology_?igsh=OWtsdzZ4bTZpazMz"
        target="_blank"
        aria-label="Instagram"
      />
      <UButton
        icon="i-simple-icons-whatsapp"
        color="neutral"
        variant="ghost"
        to="#"
        target="_blank"
        aria-label="WhatsApp"
      />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="#"
        target="_blank"
        aria-label="Linkedin"
      />
    </template>
  </PageFooter>
</template>
