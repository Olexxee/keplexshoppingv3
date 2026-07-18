import { Hero } from "../../blocks/marketing/Hero";
import { Categories } from "../../blocks/catalog/Categories/Categories";
import { FeaturedProducts } from "../../blocks/catalog/FeaturedProducts/FeaturedProducts";
import { PromotionBanner } from "../../blocks/marketing/PromotionBanner";
import { Collections } from "../../blocks/catalog/Collections/Collections";

import { useHome } from "./hooks/useHome";

export function HomeFeature() {
  const { data, loading } = useHome();

  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts products={data.featuredProducts} loading={loading} />

      <PromotionBanner />

      <Collections collections={data.collections} />
    </>
  );
}
