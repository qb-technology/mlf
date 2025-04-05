<script lang="ts" setup>
  import { tv_base_ui as tv } from '#imports';
  import type { BaseBlogPostProp } from './BlogPost.vue';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  type UI = {
    base?: string;
  };

  export type BaseBlogPostsProp = PrimitiveProps & {
    class?: string;
    posts?: Array<BaseBlogPostProp>;
    orientation?: 'horizontal' | 'vertical';
    ui?: UI;
  };
  const props = withDefaults(defineProps<BaseBlogPostsProp>(), {
    as: 'div',
    class: '',
    orientation: 'horizontal',
    ui: () => ({}),
    posts: () => [],
  });

  const blogPosts = tv({
    base: 'flex flex-col gap-8 lg:gap-y-16',
    variants: {
      orientation: {
        horizontal: 'sm:grid sm:grid-cols-2 lg:grid-cols-3',
        vertical: '',
      },
    },
  });
  const _ui = computed(() => blogPosts({ orientation: props.orientation }));
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="[_ui]">
    <slot>
      <template v-if="posts.length">
        <BaseBlogPost v-for="(post, ind) in posts" :key="ind" v-bind="post" />
      </template>
    </slot>
  </Primitive>
</template>

<style scoped></style>
