const size = {
  xxs: '320px',
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xlg: '1440px'
}

const device = {
  maxXXS: `(max-width: ${size.xxs})`,
  maxXS: `(max-width: ${size.xs})`,
  maxSM: `(max-width: ${size.sm})`,
  maxMD: `(max-width: ${size.md})`,
  maxLG: `(max-width: ${size.lg})`,
  maxXLG: `(max-width: ${size.xlg})`,

  minXXS: `(min-width: ${size.xxs})`,
  minXS: `(min-width: ${size.xs})`,
  minSM: `(min-width: ${size.sm})`,
  minMD: `(min-width: ${size.md})`,
  minLG: `(min-width: ${size.lg})`,
  minXLG: `(min-width: ${size.xlg})`,
}

const breakpoints = {
  size,
  device
}

export default breakpoints;