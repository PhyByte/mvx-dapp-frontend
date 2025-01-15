const imageWithName = (path: string): string => `/assets/images/${path}`;
const iconWithName = (path: string): string => `/assets/icons/${path}`;

export const APP_IMAGES = {
  logo: imageWithName('logo.png'),
  logoFull: imageWithName('logo-full.png'),
};

export const APP_ICONS = {
  verticalArrows: iconWithName('vertical-arrows.png'),
};
