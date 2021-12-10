const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans'],
    },
    fontSize: {
      xxs: ['0.7058rem', { lineHeight: '1.618' }],
      xs: ['0.8235rem', { lineHeight: '1.618' }],
      sm: ['0.8823rem', { lineHeight: '1.618' }],
      base: ['1rem', { lineHeight: '1.618' }],
      lg: ['1.2352rem', { lineHeight: '1.618' }],
      xl: ['1.5882rem', { lineHeight: '1.618' }],
      '2xl': ['1.9411rem', { lineHeight: '1.618' }],
      '3xl': ['2.5294rem', { lineHeight: '1.618' }],
      '4xl': ['3.0588rem', { lineHeight: '1.618' }],
      '5xl': ['3.82353rem', { lineHeight: '1.618' }],
      '6xl': ['4.7647rem', { lineHeight: '1.618' }],
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: '#111111',
    //   white: '#fff',
    //   primary: '#cf5c78',
    //   secondary: '#596dd8',
    //   neutral: '#333',
    // },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#111111',
        white: '#fff',
        primary: '#cf5c78',
        secondary: '#596dd8',
        neutral: '#333',
        'black-shade': {
          DEFAULT: '#9E9E9E',
          '50': '#EEEEEE',
          '100': '#E6E6E6',
          '200': '#D4D4D4',
          '300': '#C2C2C2',
          '400': '#B0B0B0',
          '500': '#9E9E9E',
          '600': '#7D7D7D',
          '700': '#5C5C5C',
          '800': '#3B3B3B',
          '900': '#1c1c1c'
        },
        blush: {
          '50':  '#fdfcfb',
          '100': '#fbf0ee',
          '200': '#f7cedc',
          '300': '#eda1b9',
          '400': '#ea7191',
          '500': '#cf5c78',
          '600': '#c73451',
          '700': '#9f273b',
          '800': '#731b27',
          '900': '#471115',
        },
        chestnut: {
          '50':  '#fcfbf8',
          '100': '#faf0e0',
          '200': '#f4d7bf',
          '300': '#e4ae8e',
          '400': '#d6815f',
          '500': '#bf5e3c',
          '600': '#a24328',
          '700': '#7d321f',
          '800': '#562317',
          '900': '#35150e',
        },
        sepia: {
          '50':  '#fbfaf7',
          '100': '#f8f0da',
          '200': '#f0dbb2',
          '300': '#dbb57e',
          '400': '#c2894f',
          '500': '#a5682f',
          '600': '#884d1f',
          '700': '#673a19',
          '800': '#462813',
          '900': '#2c180d',
        },
        shadow: {
          '50':  '#f9f9f6',
          '100': '#f3f0e3',
          '200': '#e4dec1',
          '300': '#c3bc90',
          '400': '#969460',
          '500': '#76733c',
          '600': '#5e5929',
          '700': '#484321',
          '800': '#312e19',
          '900': '#1f1c11',
        },
        asparagus: {
          '50':  '#f8f9f7',
          '100': '#eff0eb',
          '200': '#dadfd3',
          '300': '#b3bea9',
          '400': '#7f977a',
          '500': '#617754',
          '600': '#4e5d3c',
          '700': '#3d462f',
          '800': '#2a2f22',
          '900': '#1a1d17',
        },
        steel: {
          '50':  '#f5f8f9',
          '100': '#e0f0f8',
          '200': '#bce0f1',
          '300': '#8ac1dd',
          '400': '#539cc4',
          '500': '#3e7baa',
          '600': '#33618f',
          '700': '#2a496f',
          '800': '#1e314f',
          '900': '#121e33',
        },
        denim: {
          '50':  '#f6f9fa',
          '100': '#e1f1fb',
          '200': '#bfddf7',
          '300': '#91bcea',
          '400': '#6196da',
          '500': '#4b74ca',
          '600': '#3e58b5',
          '700': '#314291',
          '800': '#222d67',
          '900': '#141b41',
        },
        royalblue: {
          '50':  '#f6f9fb',
          '100': '#e3f0fc',
          '200': '#c5dbf9',
          '300': '#9ab9ef',
          '400': '#7191e3',
          '500': '#596dd8',
          '600': '#4951c6',
          '700': '#393da3',
          '800': '#272976',
          '900': '#161a4a',
        },
        orchid: {
          '50':  '#f9fafb',
          '100': '#ecf0fb',
          '200': '#d8d7f7',
          '300': '#b6b2ec',
          '400': '#9a88dd',
          '500': '#8064d1',
          '600': '#6848bc',
          '700': '#4e3698',
          '800': '#36256b',
          '900': '#1e173f',
        },
        violet: {
          '50':  '#fbfbfb',
          '100': '#f5f0f8',
          '200': '#ebd3f0',
          '300': '#d6abdd',
          '400': '#c97ec5',
          '500': '#b359b0',
          '600': '#973e93',
          '700': '#722e6f',
          '800': '#4e204a',
          '900': '#2d1429',
        },
        "lnk-1": "#0077b5",
        "lnk-2": "#000000",
        "lnk-3": "#313335",
        "lnk-4": "#86888a",
        "lnk-5": "#caccce",
        "lnk-6": "#00a0dc",
        "lnk-7": "#8d6cab",
        "lnk-8": "#dd5143",
        "lnk-9": "#e68523"
      },
      spacing: {
        'k0' : '3.125%',
        'k1' : '6.25%',
        'k2' : '12.5%',
        'k3' : '25%',
        'k4' : '33.3333%',
        'k5' : '50%',
        'k6' : '66.6666%',
        'k7' : '75%',
        'k8' : '87.5%',
        'k9' : '93.75%',
        'k10' : '96.875%',
        'k100' : '100%',
        'k0v' : '3.125vh',
        'k1v' : '6.25vh',
        'k2v' : '12.5vh',
        'k3v' : '25vh',
        'k4v' : '33.3333vh',
        'k5v' : '50vh',
        'k6v' : '66.6666vh',
        'k7v' : '75vh',
        'k8v' : '87.5vh',
        'k9v' : '93.75vh',
        'k10v' : '96.875vh',
        'k100v' : '100vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
// "IBM Plex Sans"  