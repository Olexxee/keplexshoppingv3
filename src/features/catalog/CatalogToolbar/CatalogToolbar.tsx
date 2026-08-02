import { SearchControl } from "./SearchControl";
import { SortControl } from "./SortControl";
import { ResultCount } from "./ResultCount";
import { ViewModeControl } from "./ViewModeControl";
import { FilterButton } from "./FilterButton";
import { ActiveFilters } from "./ActiveFilters";
import type { CatalogToolbarProps } from "./CatalogToolbar.types";
import * as S from "./CatalogToolbar.styles";



export function CatalogToolbar({
  model,
  onSearch,
  onSort,
  onViewChange,
  onOpenFilters,
  onClearFilters,
  onRemoveFilter,
}: CatalogToolbarProps) {
  return (
    <S.Root>
      <S.Left>
        <S.SearchWrapper>
          <SearchControl value={model.search} onChange={onSearch} />
        </S.SearchWrapper>

        <ResultCount count={model.resultCount} />
      </S.Left>

      <S.Right>
        <SortControl value={model.sort} onChange={onSort} />

        <ViewModeControl value={model.view} onChange={onViewChange} />

        <FilterButton
          activeFilters={model.activeFilters}
          onClick={onOpenFilters}
        />
      </S.Right>

      <ActiveFilters
        filters={model.filters}
        onRemove={onRemoveFilter}
        onClear={onClearFilters}
      />
    </S.Root>
  );
}
