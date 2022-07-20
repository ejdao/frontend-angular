export const EDA_DEFAULT_APPEARANCE_FORM: any = 'legacy';

export const LANG: any = 'en';

export const validateEdaFormColor = (color: string) => {
  if (['primary', 'accent', 'warn'].indexOf(color) < 0) {
    return 'primary';
  } else {
    return color;
  }
};
export const validateEdaFormAppearance = (appearance: string) => {
  if (['outline', 'fill', 'standard', 'legacy'].indexOf(appearance) < 0) {
    return 'legacy';
  } else {
    return appearance;
  }
};
