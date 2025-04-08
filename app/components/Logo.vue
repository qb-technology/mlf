<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
  import { tv_base_ui as tv } from '#imports';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  const logo = tv({
    slots: {
      root: 'flex items-start gap-2 w-fit',
      leadingIcon: 'size-7 text-(--ui-primary)',
      label: 'wrap-normal max-w-(160px) text-base sm:text-lg leading-tight',
    },
  });

  export type LogoProps = PrimitiveProps & {
    class?: string;
    ui?: Partial<(typeof logo)['slots']>;
  };
  const props = withDefaults(defineProps<LogoProps>(), {
    class: '',
    ui: () => ({}),
  });
  const _ui = computed(() => logo());
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="_ui.root({ class: [props.class, ui.root] })"
  >
    <UIcon
      name="i-lucide:earth"
      :class="_ui.leadingIcon({ class: [ui.leadingIcon] })"
    />
    <span :class="_ui.label({ class: [ui.label] })">
      Martin Luther Foundation
    </span>
  </Primitive>
</template>

<style scoped></style>
