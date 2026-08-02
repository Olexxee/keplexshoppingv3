import { Hero } from "../../blocks/marketing/Hero";
import { CategoryFeature } from "../../blocks/catalog/Categories/Categories";
import { PromotionBanner } from "../../blocks/marketing/PromotionBanner";
// import { Collections } from "../../blocks/catalog/Collections/Collections";
// import { Brands } from "../../blocks/catalog/Brands/Brands";
import { CatalogFeature } from "../catalog/CatalogFeature";



export function HomeFeature() {
  return (
    <>
      <Hero />

      <CategoryFeature variant="homepage" />

      <CatalogFeature variant="homepage" />

      <PromotionBanner />

      {/* <CollectionFeature variant="homepage" /> */}

      {/* <BrandFeature variant="homepage" /> */}
    </>
  );
}
