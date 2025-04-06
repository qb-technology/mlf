<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      noPadding?: boolean;
      aspectRatio?: 'image' | 'video' | 'auto' | 'square' | 'full';
    }>(),
    {
      aspectRatio: 'video',
    },
  );

  const aspect = computed(() => {
    switch (props.aspectRatio) {
      case 'full':
        return 'aspect-full';
      case 'video':
        return 'aspect-video';
      case 'image':
        return 'aspect-image';
      default:
        return 'aspect-video';
    }
  });
</script>
<template>
  <div
    class="relative rounded-[calc(var(--ui-radius)*2)] bg-(--ui-bg-elevated)/50 aspect-video p-4 sm:p-6"
  >
    <div
      class="relative overflow-hidden rounded-(--ui-radius) border border-dashed border-(--ui-border-accented) opacity-75 flex items-center justify-center"
      :class="[noPadding ? '' : 'px-4', aspect]"
    >
      <svg
        class="absolute inset-0 h-full w-full stroke-(--ui-border-inverted)/10"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
          width="100%"
          height="100%"
        />
      </svg>

      <slot />
    </div>
  </div>
</template>
