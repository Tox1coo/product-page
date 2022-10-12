import { defineConfig } from 'vite'
import * as path from 'path'
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/_variables.scss";
                        @import "@/styles/fonts.scss";`
			}
		}
	},
})