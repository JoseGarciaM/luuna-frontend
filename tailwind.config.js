/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  theme: {
    screens: {
      '2xs': '340px',
      'xs': '410px',
      'sm': '640px',
      'md': '767px',
      'lg': '992px',
      'xl': '1024px',
      '2xl': '1340px',
      '3xl': '1536px',
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'prose': '65ch',
      'screen-sm': '640px',
      'screen-xl': '1170px',
      'screen-2xl': '1340px',
    },
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': colors.black,
      'white': colors.white,
    },
    boxShadow: {
      'xs': '0px 4px 8px 0 rgba(0,0,0,0.12)',
      'sm': '0 5px 10px 0 rgba(0,0,0,0.12)',
      'DEFAULT': '0 5px 17px 0 rgba(0,0,0,0.14)',
      'md': '0 8px 26px 0 rgba(0,0,0,0.16)',
      'lg': '0 30px 60px 0 rgba(0,0,0,0.16)',
      'none': 'none',
    },
    fontSize: {
      '2xs': ['0.7rem', {
        lineHeight: '1rem',
      }],
      '3xs': ['0.75rem', {
        lineHeight: '1rem',
      }],
      'xs': ['0.875rem', {
        lineHeight: '1.25rem',
      }],
      'sm': ['0.9375rem', {
        lineHeight: '1.25rem',
      }],
      'base': ['1rem', {
        lineHeight: '1.5rem',
      }],
      'lg': ['1.125rem', {
        lineHeight: '1.75rem',
      }],
      'xl': ['1.25rem', {
        lineHeight: '1.75rem',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '1.15',
      }],
      '3xl': ['1.77rem', {
        lineHeight: '1.15',
      }],
      '4xl': ['2.3rem', {
        lineHeight: '1.1',
      }],
      '5xl': ['2.9rem', {
        lineHeight: '1.15',
      }],
      '6xl': ['3.75rem', {
        lineHeight: '1.15',
      }],
      '7xl': ['4.5rem', {
        lineHeight: '1.15',
      }],
      '8xl': ['6rem', {
        lineHeight: '1.15',
      }],
      '9xl': ['8rem', {
        lineHeight: '1.15',
      }],
    },
    fontWeight: {
      'hairline': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'mediumbold': 540,
      'semibold': 600,
      'bold': 700,
      'extrabold': 790,
      'black': 900,
    },
    letterSpacing: {
      tightest: '-.05em',
      tighter: '-.03em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
    extend: {
      spacing: {
        '0.125': '0.03125rem',
        '0.25': '0.0625rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
      },
      zIndex: {
        '-30': '-30',
        '-20': '-20',
        '-10': '-10',
        '100': '100',
        '110': '110',
        '120': '120',
        '130': '130',
        '140': '140',
        '150': '150',
        '800': '800',
        '810': '810',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      visibility: ['hover', 'group-hover'],
      borderWidth: ['hover', 'group-hover', 'focus'],
      margin: ['last'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-padding-safe')(),
    require('tailwindcss-margin-safe')(),
    plugin(({ addComponents, theme }) => {
      const customComponents = {
        '.btn-sm': {
          height: theme('height.8'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.mediumbold'),
          lineHeight: theme('lineHeight.none'),
          userSelect: 'none',
        },
        '.btn-medium': {
          height: theme('height.10'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.mediumbold'),
          lineHeight: theme('lineHeight.none'),
          userSelect: 'none',
        },
        '.btn-lg': {
          height: theme('height.12'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.mediumbold'),
          lineHeight: theme('lineHeight.none'),
          userSelect: 'none',
        },
        '.btn-xl': {
          height: theme('height.13'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.mediumbold'),
          lineHeight: theme('lineHeight.none'),
          userSelect: 'none',
        },
        '.btn-2xl': {
          height: theme('height.14'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.mediumbold'),
          lineHeight: theme('lineHeight.none'),
          userSelect: 'none',
        },
        '.btn-3xl': {
          height: theme('height.15'),
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.mediumbold'),
          lineHeight: theme('lineHeight.none'),
          userSelect: 'none',
        },
        '.btn-pill': {
          borderRadius: theme('borderRadius.full')
        },
        '.btn-rc': {
          borderRadius: theme('borderRadius.lg')
        },
        '.btn-px-sm': {
          paddingLeft: theme('spacing.2'),
          paddingRight: theme('spacing.2')
        },
        '.btn-px-base': {
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3')
        },
        '.btn-px-lg': {
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        },
        '.btn-px-xl': {
          paddingLeft: theme('spacing.5'),
          paddingRight: theme('spacing.5')
        },
        '.btn-px-2xl': {
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6')
        },
        '.btn-px-3xl': {
          paddingLeft: theme('spacing.7'),
          paddingRight: theme('spacing.7')
        },
        '.btn-flex': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.btn-inline-flex': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.btn-label': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.btn-label-start': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 'auto'
        },
        '.btn-label-grow': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 'auto',
          marginLeft: 'auto'
        },
        '.btn-prefix': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '0.625rem'
        },
        '.btn-prefix-sm': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '0.375rem'
        },
        '.btn-suffix': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '0.625rem'
        },
        '.btn-suffix-sm': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '0.375rem'
        },
        '.btn-primary': {
          backgroundColor: theme('colors.system.1000'),
          color: theme('colors.system.0'),
          '&:hover': {
            backgroundColor: theme('colors.system.800')
          },
          '&:active': {
            backgroundColor: theme('colors.system.700')
          },
        },
        '.btn-primary-blue': {
          backgroundColor: theme('colors.blue.400'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.blue.300')
          },
          '&:active': {
            backgroundColor: theme('colors.blue.500')
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.system.75'),
          color: theme('colors.system.900'),
          '&:hover': {
            backgroundColor: theme('colors.system.100')
          },
          '&:active': {
            backgroundColor: theme('colors.system.200')
          },
        },
        '.btn-secondary-blue': {
          backgroundColor: theme('colors.blue.50'),
          color: theme('colors.blue.500'),
          '&:hover': {
            backgroundColor: theme('colors.blue.75')
          },
          '&:active': {
            backgroundColor: theme('colors.blue.100')
          },
        },
        '.btn-secondary-nh': {
          backgroundColor: theme('colors.system.50'),
          color: theme('colors.system.900'),
          '&:active': {
            backgroundColor: theme('colors.system.100')
          },
        },
        '.btn-secondary-blue-nh': {
          backgroundColor: theme('colors.blue.50'),
          color: theme('colors.blue.500'),
          '&:active': {
            backgroundColor: theme('colors.blue.100')
          },
        },
        '.btn-tertiary': {
          color: theme('colors.system.700'),
          '&:hover': {
            backgroundColor: theme('colors.system.75')
          },
          '&:active': {
            backgroundColor: theme('colors.system.100')
          },
        },
        '.btn-tertiary-nh': {
          color: theme('colors.system.600'),
          '&:active': {
            backgroundColor: theme('colors.system.75')
          },
        },
        '.border-inset': {
          boxShadow: '0px 0px 0px 2px #006AFF inset'
        },
        '.h-95-pc': {
          height: '95% !important'
        },
        '.w-search-map-xl': {
          width: 'calc(100% - 700px) !important'
        },
        '.w-search-list-xl': {
          width: '700px !important'
        },
        '.w-search-map-2xl': {
          width: 'calc(100% - 828px) !important'
        },
        '.w-search-list-2xl': {
          width: '828px !important'
        }
      }

      addComponents(customComponents, {
        variants: ['responsive', 'hover'],
      })
    })
  ],
};
