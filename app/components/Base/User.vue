<script lang="ts" setup>
  import type { AvatarProps, ButtonProps, ChipProps } from '@nuxt/ui';
  import type {
    RouteLocationAsRelativeGeneric,
    RouteLocationAsPathGeneric,
  } from '#vue-router';
  import { twMerge } from 'tailwind-merge';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  type UI = {
    root?: string;
    wrapper?: string;
    name?: string;
    description?: string;
    avatar?: string;
  };

  export interface BaseUserProp extends PrimitiveProps {
    name?: string;
    description?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    avatar?: Omit<AvatarProps, 'size'> & { [key: string]: any };
    chip?: boolean | Omit<ChipProps, 'size' | 'inset'>;
    size?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    orientation?: 'horizontal' | 'vertical';
    to?: string | RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric;
    target?: ButtonProps['target'];
    ui?: UI;
  }

  const props = withDefaults(defineProps<BaseUserProp>(), {
    as: 'div',
    name: '',
    description: '',
    avatar: () => ({}),
    chip: () => ({}),
    size: 'md',
    orientation: 'horizontal',
    to: undefined,
    target: null,
    ui: () => ({}),
  });

  const def_ui = {
    slots: {
      root: 'relative group/user',
      wrapper: '',
      name: 'font-medium',
      description: 'text-(--ui-text-muted)',
      avatar: 'shrink-0',
    },
    variants: {
      orientation: {
        horizontal: {
          root: 'flex items-center',
        },
        vertical: {
          root: 'flex flex-col',
        },
      },
      to: {
        true: {
          name: [
            'text-(--ui-text) peer-hover:text-(--ui-text-highlighted)',
            'transition-colors',
          ].join(' '),
          description: [
            'peer-hover:text-(--ui-text-muted-toned)',
            'transition-colors',
          ].join(' '),
          avatar:
            'transform transition-transform duration-200 group-hover/user:scale-115',
        },
        false: {
          name: 'text-(--ui-text-highlighted)',
          description: '',
          avatar: '',
        },
      },
      size: {
        '3xs': {
          root: 'gap-1',
          wrapper: 'flex items-center gap-1',
          name: 'text-xs',
          description: 'text-xs',
        },
        '2xs': {
          root: 'gap-1.5',
          wrapper: 'flex items-center gap-1.5',
          name: 'text-xs',
          description: 'text-xs',
        },
        xs: {
          root: 'gap-1.5',
          wrapper: 'flex items-center gap-1.5',
          name: 'text-xs',
          description: 'text-xs',
        },
        sm: {
          root: 'gap-2',
          name: 'text-xs',
          description: 'text-xs',
          wrapper: '',
        },
        md: {
          root: 'gap-2',
          name: 'text-sm',
          description: 'text-xs',
          wrapper: '',
        },
        lg: {
          root: 'gap-2.5',
          name: 'text-sm',
          description: 'text-sm',
          wrapper: '',
        },
        xl: {
          root: 'gap-2.5',
          name: 'text-base',
          description: 'text-sm',
          wrapper: '',
        },
        '2xl': {
          root: 'gap-3',
          name: 'text-base',
          description: 'text-base',
          wrapper: '',
        },
        '3xl': {
          root: 'gap-3',
          name: 'text-lg',
          description: 'text-base',
          wrapper: '',
        },
      },
    },
    defaultVariants: {
      size: 'md',
    },
  };

  function getOrient() {
    return def_ui.variants.orientation[props.orientation];
  }

  function toStyle() {
    return def_ui.variants.to[props.to ? 'true' : 'false'];
  }
  function sizeStyle() {
    return def_ui.variants.size[props.size];
  }

  const _ui = computed(() => {
    const _orientation = getOrient();
    const _to = toStyle();
    const _size = sizeStyle();

    const keys = Object.keys(def_ui.slots) as Array<keyof UI>;
    const _obj = Object.fromEntries(
      keys.map((x) => {
        const _others = [] as string[];
        if (x === 'root') {
          _others.push(...[_orientation.root, _size.root]);
        } else if (x === 'name') {
          _others.push(...[_size.name, _to.name]);
        } else if (x === 'description') {
          _others.push(...[_size.description, _to.description]);
        } else if (x === 'wrapper') {
          _others.push(...[_size.wrapper]);
        } else if (x === 'avatar') {
          _others.push(...[_to.avatar]);
        }

        return [x, twMerge(def_ui.slots[x], _others.join(' '), props.ui[x])];
      }),
    );

    return _obj as (typeof def_ui)['slots'];
  });
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="_ui.root">
    <UAvatar v-bind="avatar" :class="_ui.avatar" />
    <div :class="[_ui.wrapper]">
      <ULink :to="to">
        <span class="absolute inset-0" aria-hidden="true"></span>
      </ULink>
      <p :class="_ui.name">{{ name }}</p>
      <p :class="_ui.description">{{ description }}</p>
    </div>
  </Primitive>
</template>

<style scoped></style>
