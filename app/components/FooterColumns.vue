<script lang="ts" setup>
  import type { LinkProps } from '@nuxt/ui';
  import { Primitive, type PrimitiveProps } from 'reka-ui';
  import { tv_base_ui as tv } from '#imports';

  type column = {
    label: string;
    children?: Array<LinkProps & { label?: string; icon?: string }>;
  };

  type UI = {
    root?: string;
    left?: string;
    center?: string;
    right?: string;
    label?: string;
    list?: string;
    item?: string;
    link?: string;
    linkLeadingIcon?: string;
    linkLabel?: string;
    linkLabelExternalIcon?: string;
  };

  export interface FooterColumnProp extends PrimitiveProps {
    class?: string;
    columns?: column[];
    ui?: UI;
  }

  const props = withDefaults(defineProps<FooterColumnProp>(), {
    as: 'nav',
    class: '',
    columns: () => [],
    ui: () => ({}),
  });

  const footerColumns = tv({
    slots: {
      root: 'xl:grid xl:grid-cols-3 xl:gap-8',
      left: 'mb-10 xl:mb-0',
      center:
        'flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2',
      right: 'mt-10 xl:mt-0',
      label: 'text-sm font-semibold',
      list: 'mt-6 space-y-4',
      item: 'relative',
      link: 'group text-sm flex items-center gap-1.5 focus-visible:outline-(--ui-primary)',
      linkLeadingIcon: 'size-5 shrink-0',
      linkLabel: 'truncate',
      linkLabelExternalIcon:
        'size-3 absolute top-0 text-(--ui-text-dimmed) inline-block',
    },
    variants: {
      active: {
        true: {
          link: 'text-(--ui-primary) font-medium',
        },
        false: {
          link: [
            'text-(--ui-text-muted) hover:text-(--ui-text)',
            'transition-colors',
          ],
        },
      },
    },
  });

  const _ui = computed(() => footerColumns());
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="_ui.root({ class: [props.class, ui.root] })"
  >
    <div v-if="$slots.left" :class="_ui.left({ class: [ui.left] })">
      <slot name="left"></slot>
    </div>

    <div :class="_ui.center({ class: [ui.center] })">
      <slot name="default">
        <div v-for="(col, ind) in columns" :key="ind">
          <h3 :class="_ui.label({ class: [ui.label] })">{{ col.label }}</h3>
          <ul :class="_ui.list({ class: [ui.list] })">
            <li
              v-for="(item, it_ind) in col.children"
              :key="`${ind}_${it_ind}`"
              :class="_ui.item({ class: [ui.item] })"
            >
              <ULink v-bind="item">
                <slot name="link-leading" v-bind="item">
                  <UIcon
                    v-if="item.icon"
                    :name="item.icon"
                    :class="
                      _ui.linkLeadingIcon({ class: [ui.linkLeadingIcon] })
                    "
                  ></UIcon>
                </slot>
                <span :class="_ui.linkLabel({ class: [ui.linkLabel] })">
                  <slot name="link-label" v-bind="item">
                    {{ item.label }}
                  </slot>
                  <slot name="link-trailing" v-bind="item">
                    <UIcon
                      v-if="item.target == '_blank'"
                      name="i-lucide-arrow-up-right"
                      :class="
                        _ui.linkLabelExternalIcon({
                          class: [ui.linkLabelExternalIcon],
                        })
                      "
                    ></UIcon>
                  </slot>
                </span>
              </ULink>
            </li>
          </ul>
        </div>
      </slot>
    </div>

    <div v-if="$slots.right" :class="_ui.right({ class: [ui.right] })">
      <slot name="right"></slot>
    </div>
  </Primitive>
</template>

<style scoped></style>
