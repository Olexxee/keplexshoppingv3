import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../button/Button";
import { Typography } from "../../typography/Typography";
import * as S from "./Pagination.styles";
import type { PaginationProps } from "./Pagination.types";



export function Pagination({ pagination, onPageChange }: PaginationProps) {
  return (
    <S.Root>
      <Button
        variant="outline"
        size="sm"
        disabled={!pagination.canGoPrevious}
        leftIcon={<ChevronLeft size={16} />}
        onClick={() => onPageChange?.(pagination.page - 1)}
      >
        Previous
      </Button>

      <S.PageInfo>
        <Typography variant="bodySm" weight="medium">
          Page {pagination.page} of {pagination.totalPages}
        </Typography>
      </S.PageInfo>

      <Button
        variant="outline"
        size="sm"
        disabled={!pagination.canGoNext}
        rightIcon={<ChevronRight size={16} />}
        onClick={() => onPageChange?.(pagination.page + 1)}
      >
        Next
      </Button>
    </S.Root>
  );
}
