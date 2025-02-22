import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': process.env
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        react(),
        checker({
            typescript: true,
            terminal: true
        })
    ],
})
