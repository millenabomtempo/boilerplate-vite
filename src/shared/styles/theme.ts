import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// ADD IMPORT

const config = defineConfig({
  globalCss: {
    'html, body': {
      backgroundColor: '#FAFBFC',
      color: '#031109',
      fontFamily: 'sans-serif',
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
    semanticTokens: {
      colors: {},
    },
    recipes: {
      // ADD RECIPE
    },
    slotRecipes: {
      // ADD SLOT RECIPE
    },
    breakpoints: {},
  },
})

export const system = createSystem(defaultConfig, config)
