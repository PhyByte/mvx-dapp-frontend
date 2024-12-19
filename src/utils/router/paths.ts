import { IconType } from 'react-icons';
import { IoWalletOutline } from 'react-icons/io5';

function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

export const ROUTES = {
  dashboard: path('', '/dashboard'),
  unlock: path('', '/unlock'),
};

interface LinkItemProps {
  path: string;
  title: string;
  icon: IconType;
  authenticatedRoute?: boolean;
  enabled: boolean;
}

export const routes: Array<LinkItemProps> = [
  {
    path: ROUTES.dashboard,
    title: 'Dashboard',
    icon: IoWalletOutline,
    authenticatedRoute: true,
    enabled: true,
  },
  {
    path: ROUTES.unlock,
    title: 'Unlock',
    icon: IoWalletOutline,
    authenticatedRoute: false,
    enabled: true,
  },
];
