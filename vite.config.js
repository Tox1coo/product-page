import { defineConfig } from 'vite'
import * as path from 'path'
export default defineConfig({
	publicPath: process.env.NODE_ENV === "production" ? "/product-page/" : "/",
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