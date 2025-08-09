import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    './src/index.ts',
    './src/vue.ts',
  ],
  dts: true,
  platform: 'neutral',
  external: ['vue'],
})
