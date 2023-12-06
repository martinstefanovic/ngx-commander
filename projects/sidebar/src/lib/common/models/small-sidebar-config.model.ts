export interface SmallSidebarConfig {
  style?: {
    height?: string;
    width?: string;
  };
  routes: {
    title: string;
    icon?: string;
    class?: string;
  }[];
}
