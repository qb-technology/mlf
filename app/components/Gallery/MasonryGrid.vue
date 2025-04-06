<script lang="ts" setup>
  import { tv_base_ui as tv } from '#imports';
  import uiImageComponent from '#build/ui-image-component';

  type UI = {
    root?: string;
    container?: string;
    wrapper?: string;
    image?: string;
  };
  type img = { src?: string; alt?: string };
  export type GalleryMasonryGrid = {
    ui?: UI;
    class?: string;
    images?: Array<img>;
  };
  const props = withDefaults(defineProps<GalleryMasonryGrid>(), {
    images: () => [],
    class: '',
    ui: () => ({}),
  });

  const masonryGrid = tv({
    slots: {
      root: 'columns-1 md:columns-2 lg:columns-3 space-y-6 gap-6 overflow-hidden',
      container: 'grid gap-6',
      wrapper: '',
      image:
        'w-full aspect-auto object-cover rounded-xl ring ring-(--ui-border-accented)',
    },
  });

  const _ui = computed(() => masonryGrid());

  const { width } = useWindowSize();

  const num_cols = computed(() => {
    if (width.value >= 1280) return 4;
    else if (width.value >= 1024) return 3;
    else if (width.value >= 768) return 2;
    else return 1;
  });

  const columns = computed(() => {
    return Array.from(Array(num_cols.value).keys()).map((col_) => {
      return props.images.filter((_, ind) => ind % num_cols.value === col_);
    });
  });
</script>
<template>
  <div :class="[_ui.root({ class: [props.class, ui.root] })]">
    <div
      v-for="(col, i_col) of columns"
      :key="i_col"
      :class="[_ui.container({ class: [ui.container] })]"
    >
      <div
        v-for="(image, ind) of col"
        :key="ind"
        :class="[_ui.wrapper({ class: [ui.wrapper] })]"
      >
        <component
          :is="uiImageComponent"
          role="img"
          :class="[_ui.image({ class: [ui.image] })]"
          :src="image.src"
          :alt="image.alt"
          hydrate-on-visible
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
