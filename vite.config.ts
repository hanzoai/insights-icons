import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [react(), dts({ insertTypesEntry: true })],
    build: {
        sourcemap: true,
        // Ship readable output: consumers minify at their own bundle step, and an
        // unminified artifact stays diffable against the upstream it derives from.
        minify: false,
        lib: {
            entry: 'src/index.ts',
            // Output is named for what it is. Upstream emitted `posthog-icons.*`,
            // which leaked the upstream project name into every consumer's import path.
            fileName: (format) => `icons.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: { react: 'React', 'react-dom': 'ReactDOM' },
            },
        },
    },
})
