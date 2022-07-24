module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'projects': '#6002ee',
        'projects-text': '#cfbaff',
        'printer': '#71F1A2',
        'resume': '#4DD0E1',
        'server': '#F4FF81',
      }
    },
  },
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#6419E6",
        "secondary": "#D926A9",
        "accent": "#1FB2A6",
        "neutral": "#4a4a55",
        "base-100": "#282832",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }
    ],
  },
  plugins: [require("daisyui")],
}
