import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
	globalCss: {
		"html, body": { fontFamily: 'body' }
	},
	theme: {
		tokens: {
			fonts: {
				body: { value: "Lato, sans-serif" },
				heading: { value: "Roboto Condensed, sans-serif" }
			},
			colors: {
				primary: {
					DEFAULT: { value: '#0255a5' },
					50: { value: "#f4f8fb" },
					100: { value: "#d3e2f0" },
					200: { value: "#adc9e3" },
					300: { value: "#7faad3" },
					400: { value: "#6599ca" },
					500: { value: "#4181bd" },
					600: { value: "#216cb2" },
					700: { value: "#0054a3" },
					800: { value: "#00478a" },
					900: { value: "#003464" },
				},
				secondary: {
					DEFAULT: { value: '#06cbf8' },
					50: { value: "#e9fafe" },
					100: { value: "#a2ecfc" },
					200: { value: "#3cd6fa" },
					300: { value: "#05b4dc" },
					400: { value: "#05a1c5" },
					500: { value: "#0488a6" },
					600: { value: "#03738d" },
					700: { value: "#035d71" },
					800: { value: "#024e60" },
					900: { value: "#023945" }
				},
			},
			breakpoints: {
				dashboard: { value: '1100px' }
			}
		},
		semanticTokens: {
			colors: {
				primary: {
					solid: { value: "{colors.primary.500}" },
					contrast: { value: "{colors.primary.100}" },
					fg: { value: "{colors.primary.700}" },
					muted: { value: "{colors.primary.100}" },
					subtle: { value: "{colors.primary.200}" },
					emphasized: { value: "{colors.primary.300}" },
					focusRing: { value: "{colors.primary.500}" },
				}
			}
		}
	},

})

const appTheme = createSystem(defaultConfig, config)
export default appTheme;