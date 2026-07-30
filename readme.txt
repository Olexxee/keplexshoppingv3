storefront/
│
├── src/
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   ├── routes.ts
│   │   ├── providers.tsx
│   │   └── index.ts
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── commerce/
│   │   ├── layout/
│   │   ├── navigation/
│   │   └── feedback/
│   │
│   ├── features/
│   │   ├── home/
│   │   ├── catalog/
│   │   ├── product/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── wishlist/
│   │   ├── orders/
│   │   └── account/
│   │
│   ├── hooks/
│   │
│   ├── layouts/
│   │
│   ├── lib/
│   │
│   ├── pages/
│   │
│   ├── services/
│   │
│   ├── store/
│   │
│   ├── types/
│   │
│   └── utils/
│
├── public/
│
└── package.json

src/
│
├── app/
│   ├── App.tsx
│   ├── providers.tsx
│   ├── router.tsx
│   ├── routes.ts
│   └── index.ts
│
├── layouts/
│   ├── MainLayout/
│   │   ├── MainLayout.tsx
│   │   ├── MainHeader.tsx
│   │   ├── MainFooter.tsx
│   │   └── index.ts
│   │
│   └── index.ts
│
├── pages/
│
├── features/
│
├── components/
│
├── services/
│
├── hooks/
│
├── store/
│
├── types/
│
├── utils/
│
└── assets/

HomePage.tsx
CatalogPage.tsx
ProductPage.tsx
CartPage.tsx
CheckoutPage.tsx
WishlistPage.tsx
OrdersPage.tsx
AccountPage.tsx
NotFoundPage.tsx

src/
│
├── app/
│   ├── App.tsx
│   ├── providers.tsx
│   ├── router.tsx
│   ├── routes.ts
│   └── GlobalStyles.ts
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── logos/
│
├── theme/
│   ├── breakpoints.ts
│   ├── colors.ts
│   ├── radius.ts
│   ├── semantic.ts
│   ├── shadows.ts
│   ├── spacing.ts
│   ├── typography.ts
│   ├── layout.ts
│   ├── theme.ts
│   └── index.ts
│
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   ├── Typography/
│   │   ├── Container/
│   │   ├── Badge/
│   │   ├── Input/
│   │   ├── IconButton/
│   │   ├── Divider/
│   │   ├── Spinner/
│   │   ├── Skeleton/
│   │   └── index.ts
│   │
│   ├── navigation/
│   │   ├── Logo/
│   │   ├── NavItem/
│   │   ├── SearchButton/
│   │   ├── CartButton/
│   │   ├── WishlistButton/
│   │   ├── AccountButton/
│   │   └── index.ts
│   │
│   ├── commerce/
│   │   ├── ProductCard/
│   │   ├── CategoryCard/
│   │   ├── BrandCard/
│   │   ├── CollectionCard/
│   │   ├── Price/
│   │   ├── Rating/
│   │   ├── QuantitySelector/
│   │   ├── StockBadge/
│   │   └── index.ts
│   │
│   └── feedback/
│       ├── EmptyState/
│       ├── ErrorState/
│       ├── LoadingState/
│       └── index.ts
│
├── blocks/
│   ├── marketing/
│   │   ├── AnnouncementBar/
│   │   ├── Hero/
│   │   ├── EditorialBanner/
│   │   ├── Newsletter/
│   │   └── Testimonials/
│   │
│   ├── catalog/
│   │   ├── CategoryShowcase/
│   │   ├── ProductShowcase/
│   │   ├── BrandShowcase/
│   │   └── CollectionShowcase/
│   │
│   └── layout/
│       ├── Header/
│       ├── Footer/
│       ├── MobileMenu/
│       └── MegaMenu/
│
├── features/
│   ├── home/
│   ├── catalog/
│   ├── product/
│   ├── cart/
│   ├── checkout/
│   ├── wishlist/
│   ├── orders/
│   ├── account/
│   ├── auth/
│   └── search/
│
├── layouts/
│   ├── MainLayout/
│   ├── CheckoutLayout/
│   └── AuthLayout/
│
├── pages/
│   ├── HomePage.tsx
│   ├── CatalogPage.tsx
│   ├── ProductPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── WishlistPage.tsx
│   ├── OrdersPage.tsx
│   ├── AccountPage.tsx
│   └── NotFoundPage.tsx
│
├── services/
│   ├── api/
│   │   ├── axios.ts
│   │   ├── endpoints.ts
│   │   └── interceptors.ts
│   │
│   ├── product.service.ts
│   ├── category.service.ts
│   ├── brand.service.ts
│   ├── collection.service.ts
│   ├── cart.service.ts
│   ├── wishlist.service.ts
│   ├── order.service.ts
│   └── auth.service.ts
│
├── hooks/
│   ├── useDebounce.ts
│   ├── useBreakpoint.ts
│   ├── useDisclosure.ts
│   └── useScrollPosition.ts
│
├── store/
│   ├── auth/
│   ├── cart/
│   ├── wishlist/
│   └── ui/
│
├── types/
│   ├── api.ts
│   ├── product.ts
│   ├── category.ts
│   ├── order.ts
│   ├── auth.ts
│   └── common.ts
│
├── utils/
│   ├── currency.ts
│   ├── formatDate.ts
│   ├── slug.ts
│   ├── storage.ts
│   └── validators.ts
│
├── config/
│   ├── branding.ts
│   ├── navigation.ts
│   ├── announcements.ts
│   └── constants.ts
│
└── styled.d.ts


PurchasePanel/
├── PurchasePanel.tsx
├── PurchasePanel.styles.ts
├── PurchasePanel.types.ts
└── index.ts

VariantSelector/
├── VariantSelector.tsx
├── VariantSelector.styles.ts
├── VariantSelector.types.ts
└── index.ts

ShippingInfo/
├── ShippingInfo.tsx
├── ShippingInfo.styles.ts
├── ShippingInfo.types.ts
└── index.ts

StockInfo/
├── StockInfo.tsx
├── StockInfo.styles.ts
├── StockInfo.types.ts
└── index.ts

features/
└── products/
    │
    ├── aggregates/
    │   ├── ProductAggregate.ts
    │   ├── ProductCollectionAggregate.ts
    │   └── index.ts
    │
    ├── adapters/
    │   ├── adaptProduct.ts
    │   ├── adaptProductHero.ts
    │   ├── adaptProductGallery.ts
    │   ├── adaptProductInfo.ts
    │   ├── adaptProductPurchase.ts
    │   ├── adaptProductReviews.ts
    │   ├── adaptRelatedProducts.ts
    │   └── index.ts
    │
    ├── models/
    │   ├── ProductPresentationModel.ts
    │   ├── ProductHeroModel.ts
    │   ├── ProductGalleryModel.ts
    │   ├── ProductInfoModel.ts
    │   ├── ProductPurchaseModel.ts
    │   ├── ProductReviewModel.ts
    │   ├── RelatedProductsModel.ts
    │   └── index.ts
    │
    ├── services/
    │   ├── getProductDetails.ts
    │   ├── getProducts.ts
    │   ├── getFeaturedProducts.ts
    │   ├── getBestSellers.ts
    │   ├── getNewArrivals.ts
    │   ├── getRelatedProducts.ts
    │   └── index.ts
    │
    ├── hooks/
    │   ├── useProduct.ts
    │   ├── useProducts.ts
    │   ├── useFeaturedProducts.ts
    │   ├── useBestSellers.ts
    │   ├── useNewArrivals.ts
    │   ├── useRelatedProducts.ts
    │   └── index.ts
    │
    ├── components/
    │
    ├── queryKeys.ts
    ├── constants.ts
    ├── ProductFeature.tsx
    ├── ProductFeature.types.ts
    └── index.ts