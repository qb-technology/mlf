<script lang="ts" setup>
  import uiImageComponent from '#build/ui-image-component';
  defineOptions({
    inheritAttrs: false,
  });
  withDefaults(
    defineProps<{
      qbClass?: string;
      light?: string;
      dark?: string;
    }>(),
    {
      qbClass: '',
      light: '',
      dark: '',
    },
  );
</script>

<template>
  <div :class="[qbClass]">
    <component
      :is="uiImageComponent"
      v-bind="$attrs"
      :src="light"
      class="dark:hidden"
    />
    <component
      :is="uiImageComponent"
      role="img"
      v-bind="$attrs"
      :src="dark"
      class="hidden dark:block"
    />
  </div>
</template>

<style scoped></style>
