export interface BrandLogo {
  light: string;
  dark?: string;
  icon?: string;
}

export interface Branding {
  name: string;
  tagline?: string;
  description?: string;
  logo: BrandLogo;
  shortName: string;
  email: string;
    phone: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  children?: NavigationItem[];
  external?: boolean;
}
