import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { useShop } from "./hooks/useShop";
import { ShopToolbar } from "./components/ShopToolbar";
import { ShopSidebar } from "./components/ShopSidebar";
import { ProductGrid } from "./components/ProductGrid";
import { ProductPagination } from "./components/ProductPagination";
import * as S from "./ShopFeature.styles";


export function ShopFeature() {
  const { loading, products, total, page, pages } = useShop();

  return (
    <Section spacing="xl">
      <Container>
        <ShopToolbar total={total} />

        <S.Content>
          <ShopSidebar />

          <ProductGrid products={products} loading={loading} />
        </S.Content>

        <ProductPagination page={page} pages={pages} />
      </Container>
    </Section>
  );
}
