import { cn } from "../../lib/cn";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "../ui/actions/button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showFirstLast?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
  disabled?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showFirstLast = true,
  siblingCount = 1,
  boundaryCount = 1,
  disabled = false,
}: PaginationProps) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const getPaginationItems = () => {
    const totalPageNumbers = siblingCount * 2 + boundaryCount * 2 + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > boundaryCount + 2;
    const shouldShowRightDots =
      rightSiblingIndex < totalPages - boundaryCount - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = boundaryCount + siblingCount * 2 + 2;
      return [
        ...range(1, leftItemCount),
        -1,
        ...range(totalPages - boundaryCount + 1, totalPages),
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaryCount + siblingCount * 2 + 2;
      return [
        ...range(1, boundaryCount),
        -1,
        ...range(totalPages - rightItemCount + 1, totalPages),
      ];
    }

    return [
      ...range(1, boundaryCount),
      -1,
      ...range(leftSiblingIndex, rightSiblingIndex),
      -1,
      ...range(totalPages - boundaryCount + 1, totalPages),
    ];
  };

  const paginationItems = getPaginationItems();

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      aria-label="Pagination"
    >
      {showFirstLast && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1 || disabled}
          className="hidden sm:inline-flex"
        >
          <ChevronsLeft size={16} />
        </Button>
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
      >
        <ChevronLeft size={16} />
      </Button>

      {paginationItems.map((item, index) => {
        if (item === -1) {
          return (
            <span
              key={`dots-${index}`}
              className="px-2 py-1 text-sm text-muted-foreground"
            >
              …
            </span>
          );
        }

        return (
          <Button
            key={item}
            variant={currentPage === item ? "primary" : "outline"}
            size="sm"
            onClick={() => onPageChange(item)}
            disabled={disabled}
            className={cn(
              "min-w-[36px]",
              currentPage === item && "pointer-events-none",
            )}
          >
            {item}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
      >
        <ChevronRight size={16} />
      </Button>
      {showFirstLast && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages || disabled}
          className="hidden sm:inline-flex"
        >
          <ChevronsRight size={16} />
        </Button>
      )}
    </nav>
  );
};