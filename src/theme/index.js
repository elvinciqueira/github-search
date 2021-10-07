const breakpoints = ['0px', '600px', '960px', '1280px', '1920px']

breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

const lineHeights = {
  title: '32px',
  body: '24px',
  sidebarTitle: '18px',
}

const fonts = {
  body: 'Inter',
}

const fontWeight = {
  normal: '400',
  bold: '700',
}

const letterSpacing = {
  default: 'normal',
  tracked: '0.4em',
}

export const theme = {
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: [12, 16, 21],
  shadow: ['0 16 rgb(0, 0, 0, 0.24)'],
  fontWeight,
  fontFamily: 'Inter',
  lineHeights,
  letterSpacing,
  fonts,
  breakpoints,
  borderRadius: '8px',
  colors: {
    blue100: 'rgba(150, 185, 253, 1)',
    blue200: 'rgba(123, 164, 252, 1)',
    blue300: 'rgba(80, 129, 251, 1)',
    darkBlue: 'rgba(5, 29, 59, 1)',
  },
}
