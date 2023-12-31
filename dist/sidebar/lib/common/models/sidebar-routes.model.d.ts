export interface SidebarRoutes {
    title?: string;
    path?: string[];
    icon?: string;
    class?: string;
    children?: {
        title?: string;
        path?: string[];
        icon?: string;
        children?: {
            title?: string;
            path?: string[];
            icon?: string;
        }[];
    }[];
}
