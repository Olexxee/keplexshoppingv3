import { Hero } from "../../blocks/marketing/Hero";
import { Categories } from "../../blocks/catalog/Categories/Categories";
import { FeaturedProducts } from "../../blocks/catalog/FeaturedProducts/FeaturedProducts";
import { PromotionBanner } from "../../blocks/marketing/PromotionBanner";
import { Collections } from "../../blocks/catalog/Collections/Collections";
import { Brands } from "../../blocks/catalog/Brands/Brands";
import { useHome } from "./hooks/useHome";



export function HomeFeature() {
  const { loading, featuredProducts, collections, brands } = useHome();

  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts products={featuredProducts} loading={loading} />

      <PromotionBanner />

      <Collections collections={collections} />
      <Brands brands={brands} />
    </>
  );
}
