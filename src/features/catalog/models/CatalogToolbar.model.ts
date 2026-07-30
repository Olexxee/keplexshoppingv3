export interface SelectOptionModel {
  label: string;

  value: string;
}

export interface CatalogToolbarModel {
  searchPlaceholder: string;

  totalResults: number;

  categoryOptions: SelectOptionModel[];

  sortOptions: SelectOptionModel[];

  pageSizeOptions: SelectOptionModel[];
}
