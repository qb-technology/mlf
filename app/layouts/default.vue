<script lang="ts" setup></script>

<template>
  <div>
    <TemplateHeader />

    <PageMain>
      <slot />
    </PageMain>

    <USeparator type="dashed" class="h-px" />
    <TemplateFooter />
  </div>
</template>

<style scoped></style>
