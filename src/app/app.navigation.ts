import { appInfo } from './app.information';

export const KEYWORD_LAYOUT = 'layout';
export const MOBILE_RESOLUTION = 768;
const ICONS_URL = 'assets/images/sidenav';
export const TOP_INFO = {
  icon: 'favicon.ico',
  name: appInfo.name,
};
export const SIDENAV = [
  {
    type: 'link',
    title: 'Dashboard',
    icon: `${ICONS_URL}/icon-one.png`,
    route: `${KEYWORD_LAYOUT}/dashboard`,
  },
  {
    type: 'accordion',
    title: 'Components',
    routes: [
      {
        title: 'Buttons',
        icon: `${ICONS_URL}/icon-two.png`,
        route: `${KEYWORD_LAYOUT}/components/buttons`,
      },
    ],
  },
];
