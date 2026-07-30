import { Typography } from "../../typography/Typography";
import { SearchInput } from "../../form/search-input/SearchInput";
import { Select } from "../../form/quantity-input/Select";
import * as S from "./CatalogToolbar.styles";
import type { CatalogToolbarProps } from "./CatalogToolbar.types";

export function CatalogToolbar({
  toolbar,
  onSearch,
  onCategoryChange,
  onSortChange,
  onPageSizeChange,
}: CatalogToolbarProps) {
  return (
    <S.Root>
      <S.Left>
        <SearchInput
          placeholder={toolbar.searchPlaceholder}
          onSearch={onSearch}
        />

        <Typography variant="bodySm" color="secondary">
          {toolbar.totalResults} Products
        </Typography>
      </S.Left>

      <S.Right>
        <Select
          placeholder="Category"
          options={toolbar.categoryOptions}
          onChange={onCategoryChange}
        />

        <Select
          placeholder="Sort"
          options={toolbar.sortOptions}
          onChange={onSortChange}
        />

        <Select
          placeholder="Show"
          options={toolbar.pageSizeOptions}
          onChange={onPageSizeChange}
        />
      </S.Right>
    </S.Root>
  );
}
