export function ProductSummary(props: ProductSummaryProps) {
  const {
    product,
    quantity,
    selectedVariantId,
    onVariantChange,
    onQuantityChange,
    onAddToCart,
    onBuyNow,
    className,
  } = props;

  return (
    <Root className={className}>
      <ProductInfo product={product} />

      <PurchasePanel
        product={product}
        quantity={quantity}
        selectedVariantId={selectedVariantId}
        onVariantChange={onVariantChange}
        onQuantityChange={onQuantityChange}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
      />
    </Root>
  );
}
