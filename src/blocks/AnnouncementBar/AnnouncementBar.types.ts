export interface AnnouncementAction {
  label: string;
  href: string;
}

export interface Announcement {
  id: string;
  message: string;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
  expiresAt?: string;
  action?: AnnouncementAction;
}
