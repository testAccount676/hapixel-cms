import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface Auth {
  user: User;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export type Link = {
  active: boolean;
  label: string;
  url: string | null;
};

export interface NavItem {
  groupName?: string;
  title: string;
  href: string;
  icon?: LucideIcon | IconType | null;
  isActive?: boolean;
}

export interface FooterNavItem {
  title: string;
  href: string;
  icon?: LucideIcon | IconType | null;
  isActive?: boolean;
}

export interface SharedData {
  // username: string;
  // quote: { message: string; author: string };
  auth: Auth;
  flash: {
    message?: string;
  };
  authenticated: boolean;
  setting: {
    dashboard_url: string;
    // nitro_path: string;
    dashboard_min_rank: number;
  };
  // ziggy: Config & { location: string };
  sidebarOpen: boolean;
  [key: string]: unknown;
}

export interface User {
  id: number;
  username: string;
  email: string;
  motto: string;
  credits: number;
  vip_points: number;
  activity_points: number;
  seasonal_points: number;
  figure: string;
  rank: number;
  online: "0" | "1";
  last_online: number;
  auth_ticket: string | null;
  // avatar?: string;
  // email_verified_at: string | null;
  // created_at: string;
  // updated_at: string;
  [key: string]: unknown; // This allows for additional properties...
}
