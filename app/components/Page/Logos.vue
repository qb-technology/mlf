<script lang="ts" setup>
  import { tv_base_ui as tv } from '#imports';
  import uiImageComponent from '#build/ui-image-component';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  export interface pageLogosItem {
    src?: string;
    alt?: string;
  }

  interface UI {
    root?: string;
    title?: string;
    logos?: string;
    logo?: string;
  }
  export interface PageLogosProp extends PrimitiveProps {
    class?: string;
    title?: string;
    items?: Array<pageLogosItem | string>;
    marquee?: boolean;
    ui?: UI;
  }

  const props = withDefaults(defineProps<PageLogosProp>(), {
    as: 'div',
    title: '',
    class: '',
    items: () => [],
    marquee: false,
    ui: () => ({}),
  });

  const pageLogos = tv({
    slots: {
      root: 'relative overflow-hidden',
      title: 'text-lg text-center font-semibold text-(--ui-text-highlighted)',
      logos: 'mt-10',
      logo: 'size-10 shrink-0',
    },
    variants: {
      marquee: {
        false: {
          logos:
            'flex items-center shrink-0 justify-around gap-(--gap) [--gap:--spacing(16)]',
        },
      },
    },
  });

  const _ui = computed(() =>
    pageLogos({
      marquee: props.marquee,
    }),
  );
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="_ui.root({ class: [props.class, ui.root] })"
  >
    <h2 :class="_ui.title({ class: [ui.title] })">{{ title }}</h2>
    <div :class="_ui.logos({ class: [ui.logos] })">
      <slot>
        <template v-if="items.every((item) => typeof item === 'string')">
          <UIcon
            v-for="(item, index) in items"
            :key="index"
            :name="item"
            :class="_ui.logo({ class: [ui.logo] })"
          />
        </template>
        <template v-else>
          <template v-for="(item, ind) in items" :key="ind">
            <component
              :is="uiImageComponent"
              v-if="typeof item !== 'string'"
              role="img"
              :src="item.src"
              :class="_ui.logo({ class: [ui.logo] })"
            />
          </template>
        </template>
      </slot>
    </div>
  </Primitive>
</template>

<style scoped></style>
