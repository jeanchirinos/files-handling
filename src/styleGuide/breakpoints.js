const breakpoints = {
  xs: 320,
  sm: 768,
  md: 1024,
  lg: 1366,
  xl: 1600,
};

const media = (breakpoint) => {
  return `@media (min-width: ${breakpoint}px)`;
};

const mediaQueries = {
  xs: media(breakpoints.xs),
  sm: media(breakpoints.sm),
  md: media(breakpoints.md),
  lg: media(breakpoints.lg),
  xl: media(breakpoints.xl),
};

export default mediaQueries;
