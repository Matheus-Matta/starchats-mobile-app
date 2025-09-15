// theme.cjs
const colors = {
  // sua paleta "woot" de referência (mantive os RGBs iguais aos que você passou)
  woot: {
    25:  'rgb(241, 236, 254)',
    50:  'rgb(233, 217, 252)',
    75:  'rgb(216, 180, 254)',
    100: 'rgb(192, 132, 252)',
    200: 'rgb(168, 85, 247)',
    300: 'rgb(81, 56, 238)',
    400: 'rgb(70, 48, 206)',
    500: 'rgb(58, 39, 175)',
    600: 'rgb(47, 32, 144)',
    700: 'rgb(36, 24, 112)',
    800: 'rgb(23, 15, 75)',
    900: 'rgb(18, 12, 60)',
  },

  // “brand” simples apontando pro roxo principal
  brand: {
    50:  '#f1ecfe',
    100: '#e9d9fc',
    200: '#d8b4fe',
    300: '#c084fc',
    400: '#a855f7',
    500: '#5138EE', // sua cor de marca
    600: '#3728b3',
    700: '#241870',
    800: '#170f4b',
    900: '#120c3c',
  },

  // ramps estáveis (baseadas no tailwind) — pode trocar depois pelos seus valores Radix se quiser
  slate:  { 50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',300:'#cbd5e1',400:'#94a3b8',500:'#64748b',600:'#475569',700:'#334155',800:'#1e293b',900:'#0f172a' },
  gray:   { 50:'#fafafa',100:'#f4f4f5',200:'#e4e4e7',300:'#d4d4d8',400:'#a1a1aa',500:'#71717a',600:'#52525b',700:'#3f3f46',800:'#27272a',900:'#18181b' },
  green:  { 50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',500:'#10b981',600:'#059669',700:'#047857',800:'#065f46',900:'#064e3b' },
  yellow: { 50:'#fffbeb',100:'#fef3c7',200:'#fde68a',300:'#fcd34d',400:'#fbbf24',500:'#f59e0b',600:'#d97706',700:'#b45309',800:'#92400e',900:'#78350f' },
  red:    { 50:'#fef2f2',100:'#fee2e2',200:'#fecaca',300:'#fca5a5',400:'#f87171',500:'#ef4444',600:'#dc2626',700:'#b91c1c',800:'#991b1b',900:'#7f1d1d' },
  violet: { 50:'#f5f3ff',100:'#ede9fe',200:'#ddd6fe',300:'#c4b5fd',400:'#a78bfa',500:'#8b5cf6',600:'#7c3aed',700:'#6d28d9',800:'#5b21b6',900:'#4c1d95' },

  black: '#000000',
  white: '#ffffff',
};

module.exports = { colors };
