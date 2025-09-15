// theme.ts
export const theme = {
  colors: {
    ...require('./theme.cjs').colors,
  },
  // espaço para tokens de tipografia, radius, espaçamentos, sombras, etc.
  radius: { sm: 8, md: 12, lg: 16, xl: 24 },
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 },
};
