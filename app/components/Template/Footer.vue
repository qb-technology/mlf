<script setup lang="ts">
  const columns = [
    {
      label: 'Community',
      children: [
        {
          label: 'Nuxters',
          to: 'https://nuxters.nuxt.com',
          target: '_blank',
        },
        {
          label: 'Video Courses',
          to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
          target: '_blank',
        },
        {
          label: 'Nuxt on GitHub',
          to: 'https://github.com/nuxt',
          target: '_blank',
        },
      ],
    },
    {
      label: 'Solutions',
      children: [
        {
          label: 'Nuxt Content',
          to: 'https://content.nuxt.com/',
          target: '_blank',
        },
        {
          label: 'Nuxt DevTools',
          to: 'https://devtools.nuxt.com/',
          target: '_blank',
        },
        {
          label: 'Nuxt Image',
          to: 'https://image.nuxt.com/',
          target: '_blank',
        },
        {
          label: 'Nuxt UI',
          to: 'https://ui.nuxt.com/',
          target: '_blank',
        },
      ],
    },
  ];
</script>

<template>
  <PageFooter>
    <template #top>
      <UContainer>
        <FooterColumns :columns="columns">
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
