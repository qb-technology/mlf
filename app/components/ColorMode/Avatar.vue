<script lang="ts" setup>
  import type { AvatarProps } from '@nuxt/ui';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  export type ColorModeAvatarProps = PrimitiveProps & {
    light?: string;
    dark?: string;
    avatarProps?: Omit<AvatarProps, 'src'>;
  };
  defineOptions({
    inheritAttrs: false,
  });

  withDefaults(defineProps<ColorModeAvatarProps>(), {
    as: 'span',
    light: '',
    dark: '',
    avatarProps: () => ({}),
  });
</script>

<template>
  <Primitive :as="as" :as-child="asChild">
    <UAvatar
      :src="light"
      v-bind="{ ...avatarProps, ...$attrs }"
      class="dark:hidden"
    />
    <UAvatar
      :src="dark"
      v-bind="{ ...avatarProps, ...$attrs }"
      class="hidden dark:block"
    />
  </Primitive>
</template>

<style scoped></style>
