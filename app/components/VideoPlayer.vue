<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts" setup>
  import { tv_base_ui as tv } from '#imports';
  import { Primitive, type PrimitiveProps } from 'reka-ui';

  const video = tv({
    slots: {
      root: 'relative w-full h-fit ring ring-(--ui-border-muted) rounded-lg',
      frame: '',
      video: 'aspect-video',
    },
  });

  type UI = Partial<(typeof video)['slots']>;

  export interface VideoPlayerProps extends PrimitiveProps {
    class?: string;
    src: string;
    autoplay?: boolean;
    allowFullScreen?: boolean;
    controls?: boolean;
    muted?: boolean;
    allow?: string;
    ui?: UI;
  }

  const props = withDefaults(defineProps<VideoPlayerProps>(), {
    as: 'video',
    class: '',
    allow:
      'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;',
    ui: () => ({}),
    allowFullScreen: true,
    controls: true,
  });

  const _ui = computed(() => video({}));

  const _controls = ref(props.controls);

  const el = useTemplateRef<HTMLVideoElement>('videoEl');
  const { playing } = useMediaControls(el);
  const isVisible = useElementVisibility(el);
  const isHovered = useElementHover(el);
  watch(isHovered, () => {
    if (isHovered.value && !_controls.value) {
      _controls.value = true;
      return;
    }
    _controls.value = false;
  });
  watch(isVisible, () => {
    // console.log(isVisible.value);
    if (!isVisible.value && playing.value) {
      playing.value = !playing.value;
    }
  });
</script>

<template>
  <video
    ref="videoEl"
    :as="as"
    :as-child="asChild"
    :autoplay="autoplay"
    :controls="_controls"
    :class="_ui.root({ class: [props.class, ui.root] })"
  >
    <source
      :src="src"
      :allow="allow"
      :allowfullscreen="allowFullScreen"
      frameborder="0"
    />
  </video>
</template>

<style scoped></style>
