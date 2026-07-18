export interface BrandCardProps {
  /** Brand logo URL */
  logo: string;
  /** Brand name */
  name: string;
  /** Number of products */
  productCount: number;
  /** Whether brand is verified */
  verified?: boolean;
  /** Brand slug */
  slug: string;
  /** Additional className */
  className?: string;
}
