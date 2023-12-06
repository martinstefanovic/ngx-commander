import { SidebarTheme } from '../enums/sidebar-theme.enum';
import { SidebarRoutes } from './sidebar-routes.model';

export interface LargeSidebarConfig {
  theme: SidebarTheme.Angular | SidebarTheme.Classic;
  title?: string;
  routes: SidebarRoutes[];
  style?: {
    height?: string;
  };
  layout?: {
    header?: {
      show?: boolean;
      flex?: number;
    };
    body?: {
      flex?: number;
    };
    footer?: {
      show?: boolean;
      flex?: number;
    };
  };
}
