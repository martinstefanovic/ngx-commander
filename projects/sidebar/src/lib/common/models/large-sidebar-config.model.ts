import { SidebarRoutes } from './sidebar-routes.model';

export interface LargeSidebarConfig {
  theme?: 'classic' | 'angular';
  title?: string;
  routes: SidebarRoutes[];
  style?: {
    height?: string;
  };
}
