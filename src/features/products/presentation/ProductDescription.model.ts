export interface ProductDescriptionSectionModel {
  title: string;

  items: string[];
}

export interface ProductDescriptionModel {
  highlights: any;
  features: any;
  title: string;

  description?: string;

  sections: ProductDescriptionSectionModel[];
}
