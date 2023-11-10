function withOpacity(variableName) {
	return ({ opacityValue }) => {
	  if (opacityValue !== undefined) {
		return `rgba(var(${variableName}), ${opacityValue})`;
	  }
	  return `rgb(var(${variableName}))`;
	};
  }
  
  const themeColors = {
	primary : withOpacity("--color-primary"),
	secondary:  withOpacity("--color-secondary"),
	base: withOpacity("--color-base"),
	"base-100": withOpacity("--color-base-100"),
	accent: withOpacity("--color-accent"),
	"base-invert": withOpacity("--color-base-invert") 
  }
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	  './public/**/*.astro',  
	  './src/**/*.{astro,js,jsx,ts,tsx,vue}',  
	  'node_modules/preline/dist/*.js', 
	],
	theme: {
	  screens: {
		sm: '640px',
		md: '768px',
		lg: '976px',
		xl: '1440px',
	  },
	  extend: {
	  textColor: {
		skin: {
		  base: withOpacity("--color-text"),
		  accent: withOpacity("--color-accent"),
		  inverted: withOpacity("--color-fill"),
		},
		...themeColors
	  },
	  backgroundColor: {
		skin: {
		  fill: withOpacity("--color-fill"),
		  accent: withOpacity("--color-accent"),
		  inverted: withOpacity("--color-text-base"),
		  card: withOpacity("--color-card"),
		  "card-muted": withOpacity("--color-card-muted"),
		},
		...themeColors
	  },
	  outlineColor: {
		skin: {
		  fill: withOpacity("--color-accent"),
		},
		...themeColors
	  },
	  borderColor: {
		skin: {
		  line: withOpacity("--color-border"),
		  fill: withOpacity("--color-text-base"),
		  accent: withOpacity("--color-accent"),
		},
		...themeColors
	  },
	  fill: {
		skin: {
		  base: withOpacity("--color-text-base"),
		  accent: withOpacity("--color-accent"),
		},
		transparent: "transparent",
		...themeColors
	  },
	  stroke: {
		...themeColors
	  },
	  fontFamily: {
		mono: ["IBM Plex Mono", "monospace"],
		inter: ['Inter', 'sans-serif'],
	  },
	  ringColor:{
		...themeColors
	  }
	  },
	},
	plugins: [
	  require("@tailwindcss/typography"),
	  require("preline/plugin")
	],
  };