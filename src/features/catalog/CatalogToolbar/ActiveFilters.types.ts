export interface ActiveFilter {
  id: string;

  label: string;
}

export interface ActiveFiltersProps {
  filters: ActiveFilter[];

  onRemove(id: string): void;

  onClear(): void;
}
