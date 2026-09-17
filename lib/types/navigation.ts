export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
  children?: NavItem[];
}
