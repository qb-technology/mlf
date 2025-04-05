<script lang="ts" setup>
  import type { BadgeProps, ButtonProps } from '@nuxt/ui';
  import type {
    RouteLocationAsRelativeGeneric,
    RouteLocationAsPathGeneric,
  } from '#vue-router';
  import type { BaseUserProp } from './User.vue';
  import { tv_base_ui as tv } from '#imports';
  import uiImageComponent from '#build/ui-image-component';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  type UI = {
    root?: string;
    authors?: string;
    image?: string;
    header?: string;
    body?: string;
    footer?: string;
    avatar?: string;
    meta?: string;
    date?: string;
    title?: string;
    description?: string;
  };

  export type BaseBlogPostProp = PrimitiveProps & {
    title?: string;
    description?: string;
    class?: string;
    badge?: string | BadgeProps;
    image?: string | Partial<HTMLImageElement>;
    date?: string | Date;
    variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'naked';
    orientation?: 'horizontal' | 'vertical';
    reverse?: boolean;
    highlight?: boolean;
    authors?: Array<BaseUserProp>;
    to?: string | RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric;
    target?: ButtonProps['target'];
    ui?: UI;
  };

  const props = withDefaults(defineProps<BaseBlogPostProp>(), {
    as: 'article',
    title: '',
    description: '',
    class: '',
    date: '',
    variant: 'outline',
    orientation: 'vertical',
    authors: () => [],
    ui: () => ({}),
    badge: '',
    image: '',
    to: undefined,
    target: '',
  });

  const blogPost = tv({
    slots: {
      root: 'relative group/blog-post flex flex-col rounded-[calc(var(--ui-radius)*2)] overflow-hidden',
      header:
        'relative overflow-hidden aspect-[16/9] w-full pointer-events-none',
      body: 'min-w-0 flex-1 flex flex-col',
      footer: '',
      image: 'object-cover object-top w-full h-full',
      title: 'text-xl text-pretty font-semibold text-(--ui-text-highlighted)',
      description: 'mt-1 text-base text-pretty',
      authors: 'pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5',
      avatar: '',
      meta: 'flex items-center gap-2 mb-2',
      date: 'text-sm',
      badge: '',
    },
    variants: {
      orientation: {
        horizontal: {
          root: 'lg:grid lg:grid-cols-2 lg:items-center gap-x-8',
          body: 'justify-center p-4 sm:p-6 lg:px-0',
        },
        vertical: {
          root: 'flex flex-col',
          body: 'p-4 sm:p-6',
        },
      },
      variant: {
        outline: {
          root: 'bg-(--ui-bg) ring ring-(--ui-border)',
          date: 'text-(--ui-text-toned)',
          description: 'text-(--ui-text-muted)',
        },
        soft: {
          root: 'bg-(--ui-bg-elevated)/50',
          date: 'text-(--ui-text-muted)',
          description: 'text-(--ui-text-toned)',
        },
        subtle: {
          root: 'bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)',
          date: 'text-(--ui-text-muted)',
          description: 'text-(--ui-text-toned)',
        },
        ghost: {
          date: 'text-(--ui-text-toned)',
          description: 'text-(--ui-text-muted)',
          header: 'shadow-lg rounded-[calc(var(--ui-radius)*2)]',
        },
        naked: {
          root: 'p-0 sm:p-0',
          date: 'text-(--ui-text-toned)',
          description: 'text-(--ui-text-muted)',
          header: 'shadow-lg rounded-[calc(var(--ui-radius)*2)]',
        },
      },
      to: {
        true: {
          root: ['transition'],
          image:
            'transform transition-transform duration-200 group-hover/blog-post:scale-110',
          avatar: 'transform transition-transform duration-200 hover:scale-115',
        },
      },
      image: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        to: true,
        class: {
          root: 'hover:bg-(--ui-bg-elevated)/50',
        },
      },
      {
        variant: 'soft',
        to: true,
        class: {
          root: 'hover:bg-(--ui-bg-elevated)',
        },
      },
      {
        variant: 'subtle',
        to: true,
        class: {
          root: 'hover:bg-(--ui-bg-elevated) hover:ring-(--ui-border-accented)',
        },
      },
      {
        variant: 'ghost',
        to: true,
        class: {
          root: 'hover:bg-(--ui-bg-elevated)/50',
          header: ['group-hover/blog-post:shadow-none', 'transition-all'],
        },
      },
      {
        variant: 'ghost',
        to: true,
        orientation: 'vertical',
        class: {
          header: 'group-hover/blog-post:rounded-b-none',
        },
      },
      {
        variant: 'ghost',
        to: true,
        orientation: 'horizontal',
        class: {
          header: 'group-hover/blog-post:rounded-r-none',
        },
      },
      {
        orientation: 'vertical',
        image: false,
        variant: 'naked',
        class: {
          body: 'p-0 sm:p-0',
        },
      },
    ],
    defaultVariants: {
      variant: 'outline',
    },
  });

  const _ui = computed(() =>
    blogPost({
      orientation: props.orientation,
      variant: props.variant,
      to: Boolean(props.to),
    }),
  );

  const _badge = computed(() => {
    const def_badge = { variant: 'subtle', color: 'neutral' } as BadgeProps;
    return typeof props.badge === 'string'
      ? def_badge
      : { ...def_badge, ...props.badge };
  });

  function formateDate(locale = 'en-US') {
    const _date =
      typeof props.date === 'string' ? new Date(props.date) : props.date;
    return _date.toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
</script>

<template>
  <Primitive
    :ia="as"
    :as-child="asChild"
    :class="_ui.root({ class: [props.class, ui.root] })"
  >
    <div :class="[_ui.header({ class: [ui.header] })]">
      <slot name="header">
        <template v-if="typeof image === 'string'">
          <component
            :is="uiImageComponent"
            role="img"
            :src="image"
            :alt="title"
            :class="[_ui.image({ class: [ui.image] })]"
          />
        </template>
        <template v-else>
          <props.image />
        </template>
      </slot>
    </div>
    <div :class="[_ui.body({ class: [ui.body] })]">
      <div :class="[_ui.meta({ class: [ui.meta] })]">
        <UBadge v-if="badge" v-bind="_badge" />
        <time
          v-if="date"
          :datetime="date.toLocaleString()"
          :class="_ui.date({ class: [ui.date] })"
        >
          {{ formateDate() }}
        </time>
      </div>
      <h2 v-if="title" :class="_ui.title({ class: [ui.title] })">
        {{ title }}
      </h2>
      <div
        v-if="description"
        :class="_ui.description({ class: [ui.description] })"
      >
        {{ description }}
      </div>
      <div v-if="authors.length" :class="_ui.authors({ class: [ui.authors] })">
        <template v-if="authors.length == 1">
          <BaseUser v-bind="authors[0]" />
        </template>
        <template v-else>
          <UAvatarGroup>
            <UAvatar
              v-for="(author, ind) in authors"
              :key="ind"
              v-bind="author.avatar"
            />
          </UAvatarGroup>
        </template>
      </div>
    </div>
    <div :class="[_ui.footer({ class: [ui.footer] })]">
      <slot name="footer"></slot>
    </div>
  </Primitive>
</template>

<style scoped></style>
