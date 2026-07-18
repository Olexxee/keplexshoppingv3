import { Hero } from "../../blocks/marketing/Hero";
import { Categories } from "../../blocks/catalog/Categories/Categories";
import { FeaturedProducts } from "../../blocks/catalog/FeaturedProducts/FeaturedProducts"
import { featuredProductsData } from "../../config/storefront/featuredProducts.data";

export function HomeFeature() {
  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts products={featuredProductsData} />
    </>
  );
}
