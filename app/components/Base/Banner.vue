<script lang="ts" setup>
  import type { ButtonProps, LinkProps } from '@nuxt/ui';
  import type {
    RouteLocationAsRelativeGeneric,
    RouteLocationAsPathGeneric,
  } from '#vue-router';
  import { tv_base_ui as tv } from '#imports';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  type UI = {
    root?: string;
    container?: string;
    left?: string;
    center?: string;
    right?: string;
    icon?: string;
    title?: string;
    actions?: string;
    close?: string;
  };
  export interface BaseBannerProps extends PrimitiveProps {
    id?: string;
    class?: string;
    icon?: string;
    title?: string;
    actions?: ButtonProps[];
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
    target?: LinkProps['target'];
    color?: ButtonProps['color'];
    close?: boolean | Partial<ButtonProps>;
    closeIcon?: string;
    ui?: UI;
  }
  const props = withDefaults(defineProps<BaseBannerProps>(), {
    as: 'div',
    id: '1',
    icon: '',
    class: '',
    actions: () => [],
    to: undefined,
    target: null,
    title: '',
    color: 'primary',
    close: false,
    closeIcon: '',
    ui: () => ({}),
  });
  const emits = defineEmits(['close']);

  const banner = tv({
    slots: {
      root: ['relative z-50 w-full', 'transition-colors'],
      container: 'flex items-center justify-between gap-3 h-12',
      left: 'hidden lg:flex-1 lg:flex lg:items-center',
      center: 'flex items-center gap-1.5 min-w-0',
      right: 'lg:flex-1 flex items-center justify-end',
      icon: 'size-5 shrink-0 text-(--ui-bg) pointer-events-none',
      title: 'text-sm text-(--ui-bg) font-medium truncate',
      actions: 'flex gap-1.5 shrink-0 isolate',
      close:
        'text-(--ui-bg) hover:bg-(--ui-bg)/10 focus-visible:bg-(--ui-bg)/10 -me-1.5 lg:me-0',
    },
    variants: {
      color: {
        primary: {
          root: 'bg-(--ui-primary)',
        },
        secondary: {
          root: 'bg-(--ui-secondary)',
        },
        success: {
          root: 'bg-(--ui-success)',
        },
        info: {
          root: 'bg-(--ui-info)',
        },
        warning: {
          root: 'bg-(--ui-warning)',
        },
        error: {
          root: 'bg-(--ui-error)',
        },
        neutral: {
          root: 'bg-(--ui-bg-inverted)',
        },
      },
      to: {
        true: '',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        to: true,
        class: {
          root: 'hover:bg-(--ui-primary)/90',
        },
      },
      {
        color: 'neutral',
        to: true,
        class: {
          root: 'hover:bg-(--ui-bg-inverted)/90',
        },
      },
    ],
    defaultVariants: {
      color: 'primary',
    },
  });

  const _ui = computed(() =>
    banner({
      color: props.color,
      to: Boolean(props.to),
    }),
  );
  const closeButton = computed(() => {
    let _: ButtonProps = {
      color: 'neutral',
      variant: 'ghost',
      icon: props.closeIcon ? props.closeIcon : useAppConfig().ui.icons.close,
    };
    if (typeof props.close === 'boolean') {
      return _;
    }
    _ = { ..._, ...props.close };
    return { ..._ };
  });
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="_ui.root({ class: [props.class, ui.root] })"
  >
    <ULink v-if="to" :to="to" class="focus:outline-none">
      <span class="absolute inset-0" aria-hidden="true"></span>
    </ULink>
    <UContainer :class="_ui.container({ class: [ui.container] })">
      <div :class="_ui.left({ class: [ui.left] })">
        <slot name="left"></slot>
      </div>
      <div :class="_ui.center({ class: [ui.center] })">
        <UIcon
          v-if="icon"
          :name="icon"
          :class="_ui.icon({ class: [ui.icon] })"
        />
        <div :class="_ui.title({ class: [ui.title] })">{{ title }}</div>
        <div :class="_ui.actions({ class: [ui.actions] })">
          <UButton
            v-for="(but, ind) of actions"
            :key="ind"
            v-bind="but"
            :color="but.color || 'neutral'"
            :size="but.size || 'xs'"
          />
        </div>
      </div>
      <div :class="_ui.right({ class: [ui.right] })">
        <slot name="right">
          <UButton
            v-if="close"
            v-bind="closeButton"
            @click="() => emits('close')"
          />
        </slot>
      </div>
    </UContainer>
  </Primitive>
</template>

<style scoped></style>
