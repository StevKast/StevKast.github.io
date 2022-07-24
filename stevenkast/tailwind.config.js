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
        "primary": "#818cf8",
        "secondary": "#5eead4",
        "accent": "#60a5fa",
        "neutral": "#4a4a55",
        "base-100": "#282832",
        "info": "#3ABFF8",
        "success": "#059669",
        "warning": "#fde047",
        "error": "#f87171",
      },
    }
    ],
  },
  plugins: [require("daisyui")],
}
