import theme from 'styled-theming';
import colors from './colors'

export const backgroundColor = theme('mode', {
  light: colors.light.inverse,
  dark: colors.dark.inverse
});

export const textColor = theme('mode', {
  light: colors.light.primary,
  dark: colors.dark.primary
});
