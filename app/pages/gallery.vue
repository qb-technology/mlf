<script lang="ts" setup>
  useHead({
    title: 'Gallery',
  });

  const pics = [
    'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1038711/pexels-photo-1038711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12919275/pexels-photo-12919275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14646741/pexels-photo-14646741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ].map((x, ind) => ({ src: x, alt: `gallery${ind}` }));

  const testImages = [
    {
      src: 'https://picsum.photos/id/10/2500/1667',
      alt: 'Large landscape image 1 (2500x1667)',
    },
    {
      src: 'https://picsum.photos/id/11/2500/1667',
      alt: 'Large landscape image 2 (2500x1667)',
    },
    {
      src: 'https://picsum.photos/id/12/2000/1200',
      alt: 'Wide landscape (2000x1200)',
    },
    {
      src: 'https://picsum.photos/id/13/1200/1800',
      alt: 'Tall portrait (1200x1800)',
    },
    {
      src: 'https://picsum.photos/id/14/1500/1000',
      alt: 'Medium landscape (1500x1000)',
    },
    {
      src: 'https://picsum.photos/id/15/800/1200',
      alt: 'Small portrait (800x1200)',
    },
    {
      src: 'https://picsum.photos/id/16/1000/1000',
      alt: 'Square image (1000x1000)',
    },
    {
      src: 'https://picsum.photos/id/17/1800/1200',
      alt: 'Medium wide (1800x1200)',
    },
    {
      src: 'https://picsum.photos/id/18/600/900',
      alt: 'Small vertical (600x900)',
    },
    {
      src: 'https://picsum.photos/id/19/3000/2000',
      alt: 'Extra large landscape (3000x2000)',
    },
    {
      src: 'https://picsum.photos/id/20/500/800',
      alt: 'Tiny portrait (500x800)',
    },
    {
      src: 'https://picsum.photos/id/21/700/700',
      alt: 'Small square (700x700)',
    },
    {
      src: 'https://picsum.photos/id/22/4000/3000',
      alt: 'Massive landscape (4000x3000)',
    },
    {
      src: 'https://picsum.photos/id/23/900/600',
      alt: 'Small horizontal (900x600)',
    },
    {
      src: 'https://picsum.photos/id/24/1200/1200',
      alt: 'Medium square (1200x1200)',
    },
  ];

  const images1 = [
    { src: 'https://picsum.photos/200/150', alt: 'Image 200x150' },
    { src: 'https://picsum.photos/250/180', alt: 'Image 250x180' },
    { src: 'https://picsum.photos/300/200', alt: 'Image 300x200' },
    { src: 'https://picsum.photos/400/300', alt: 'Image 400x300' },
    { src: 'https://picsum.photos/500/350', alt: 'Image 500x350' },
    { src: 'https://picsum.photos/600/450', alt: 'Image 600x450' },
    { src: 'https://picsum.photos/700/500', alt: 'Image 700x500' },
    { src: 'https://picsum.photos/800/600', alt: 'Image 800x600' },
    { src: 'https://picsum.photos/900/700', alt: 'Image 900x700' },
    { src: 'https://picsum.photos/1000/750', alt: 'Image 1000x750' },
    { src: 'https://picsum.photos/1100/800', alt: 'Image 1100x800' },
    { src: 'https://picsum.photos/1200/850', alt: 'Image 1200x850' },
    { src: 'https://picsum.photos/1300/900', alt: 'Image 1300x900' },
    { src: 'https://picsum.photos/1400/950', alt: 'Image 1400x950' },
    { src: 'https://picsum.photos/1500/1000', alt: 'Image 1500x1000' },
  ];
  const images2 = [
    { src: 'https://picsum.photos/300/300', alt: 'Square 300x300' },
    { src: 'https://picsum.photos/400/400', alt: 'Square 400x400' },
    { src: 'https://picsum.photos/500/500', alt: 'Square 500x500' },
    { src: 'https://picsum.photos/600/600', alt: 'Square 600x600' },
    { src: 'https://picsum.photos/700/700', alt: 'Square 700x700' },
    { src: 'https://picsum.photos/200/300', alt: 'Portrait 200x300' },
    { src: 'https://picsum.photos/300/450', alt: 'Portrait 300x450' },
    { src: 'https://picsum.photos/400/600', alt: 'Portrait 400x600' },
    { src: 'https://picsum.photos/500/750', alt: 'Portrait 500x750' },
    { src: 'https://picsum.photos/600/900', alt: 'Portrait 600x900' },
    { src: 'https://picsum.photos/800/400', alt: 'Landscape 800x400' },
    { src: 'https://picsum.photos/900/450', alt: 'Landscape 900x450' },
    { src: 'https://picsum.photos/1000/500', alt: 'Landscape 1000x500' },
    { src: 'https://picsum.photos/1100/550', alt: 'Landscape 1100x550' },
    { src: 'https://picsum.photos/1200/600', alt: 'Landscape 1200x600' },
    { src: 'https://picsum.photos/1300/650', alt: 'Landscape 1300x650' },
    { src: 'https://picsum.photos/1400/700', alt: 'Landscape 1400x700' },
    { src: 'https://picsum.photos/1500/750', alt: 'Landscape 1500x750' },
    { src: 'https://picsum.photos/1600/800', alt: 'Landscape 1600x800' },
    { src: 'https://picsum.photos/1700/850', alt: 'Landscape 1700x850' },
    { src: 'https://picsum.photos/1800/900', alt: 'Landscape 1800x900' },
    { src: 'https://picsum.photos/1900/950', alt: 'Landscape 1900x950' },
    { src: 'https://picsum.photos/2000/1000', alt: 'Landscape 2000x1000' },
    { src: 'https://picsum.photos/2100/1050', alt: 'Landscape 2100x1050' },
    { src: 'https://picsum.photos/2200/1100', alt: 'Landscape 2200x1100' },
  ];
  const images3 = [
    { src: 'https://picsum.photos/100/100', alt: 'Tiny 100x100' },
    { src: 'https://picsum.photos/150/100', alt: 'Tiny 150x100' },
    { src: 'https://picsum.photos/200/150', alt: 'Tiny 200x150' },
    { src: 'https://picsum.photos/300/250', alt: 'Small 300x250' },
    { src: 'https://picsum.photos/400/350', alt: 'Small 400x350' },
    { src: 'https://picsum.photos/500/450', alt: 'Medium 500x450' },
    { src: 'https://picsum.photos/600/550', alt: 'Medium 600x550' },
    { src: 'https://picsum.photos/700/650', alt: 'Medium 700x650' },
    { src: 'https://picsum.photos/800/750', alt: 'Medium 800x750' },
    { src: 'https://picsum.photos/900/850', alt: 'Large 900x850' },
    { src: 'https://picsum.photos/1000/950', alt: 'Large 1000x950' },
    { src: 'https://picsum.photos/1100/1050', alt: 'Large 1100x1050' },
    { src: 'https://picsum.photos/1200/1150', alt: 'Large 1200x1150' },
    { src: 'https://picsum.photos/1300/1250', alt: 'Extra Large 1300x1250' },
    { src: 'https://picsum.photos/1400/1350', alt: 'Extra Large 1400x1350' },
    { src: 'https://picsum.photos/1500/1450', alt: 'Extra Large 1500x1450' },
    { src: 'https://picsum.photos/1600/1550', alt: 'Extra Large 1600x1550' },
    { src: 'https://picsum.photos/1700/1650', alt: 'Extra Large 1700x1650' },
    { src: 'https://picsum.photos/1800/1750', alt: 'Extra Large 1800x1750' },
    { src: 'https://picsum.photos/1900/1850', alt: 'Extra Large 1900x1850' },
    { src: 'https://picsum.photos/2000/1950', alt: 'Ultra Large 2000x1950' },
    { src: 'https://picsum.photos/2100/2050', alt: 'Ultra Large 2100x2050' },
    { src: 'https://picsum.photos/2200/2150', alt: 'Ultra Large 2200x2150' },
    { src: 'https://picsum.photos/2300/2250', alt: 'Ultra Large 2300x2250' },
    { src: 'https://picsum.photos/2400/2350', alt: 'Ultra Large 2400x2350' },
    { src: 'https://picsum.photos/2500/2450', alt: 'Ultra Large 2500x2450' },
    { src: 'https://picsum.photos/2600/2550', alt: 'Ultra Large 2600x2550' },
    { src: 'https://picsum.photos/2700/2650', alt: 'Ultra Large 2700x2650' },
    { src: 'https://picsum.photos/2800/2750', alt: 'Ultra Large 2800x2750' },
    { src: 'https://picsum.photos/2900/2850', alt: 'Ultra Large 2900x2850' },
    { src: 'https://picsum.photos/3000/2950', alt: 'Ultra Large 3000x2950' },
  ];
</script>

<template>
  <UContainer>
    <PageHero
      title="The memories made"
      headline="Gallery"
      description="Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    />

    <GalleryMasonryGrid
      :images="[...pics, ...testImages, ...images1, ...images2, ...images3]"
    />
  </UContainer>
</template>

<style scoped></style>
