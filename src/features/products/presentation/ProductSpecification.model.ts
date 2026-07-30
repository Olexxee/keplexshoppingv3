export interface ProductSpecificationItemModel {
  label: string;

  value: string;
}

export interface ProductSpecificationGroupModel {
  title: string;

  items: ProductSpecificationItemModel[];
}

export interface ProductSpecificationModel {
  groups: ProductSpecificationGroupModel[];
}
