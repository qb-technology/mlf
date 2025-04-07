export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'sky',
      neutral: 'zinc',
    },
    button: {
      defaultVariants: {
        color: 'neutral'
        // Set default button color to neutral
        // color: 'neutral'
      }
    },
    textarea: {
      slots: {
        root: 'w-full'
      }
    },
    input: {
      slots: {
        root: 'w-full'
      }
    }
  }
})
