import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import path from 'path'
import { existsSync, renameSync } from 'node:fs'

export default {
    plugins: [
        vituum({
            imports: {
                filenamePattern: {
                    '+.css': [],
                    '+.scss': []
                }
            },
        }),
        pug({ root: './src' }),
        {
            name: 'rename-pug-entry',
            closeBundle() {
                const pugPage = path.resolve(import.meta.dirname, 'dist/index.pug.html')
                const htmlPage = path.resolve(import.meta.dirname, 'dist/index.html')

                if (existsSync(pugPage)) {
                    renameSync(pugPage, htmlPage)
                }
            },
        },
    ],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, 'src'),
            '@assets': path.resolve(import.meta.dirname, 'src/assets')
        },
    },
}
