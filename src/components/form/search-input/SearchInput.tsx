import * as React from "react";

import { Search } from "lucide-react";

import { InputBase, type InputBaseProps } from "../input-base";

import { SearchLoading } from "./SearchLoading";
import { SearchClearButton } from "./SearchClearButton";
import { useDebounce } from "./useDebounce";

export interface SearchInputProps extends Omit<InputBaseProps, "type"> {
  loading?: boolean;

  debounce?: number;

  allowClear?: boolean;

  onSearch?: (value: string) => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      loading,
      debounce = 300,
      allowClear = true,
      value,
      onSearch,
      onChange,
      ...props
    },
    ref,
  ) => {
    const search = typeof value === "string" ? value : "";

    const debounced = useDebounce(search, debounce);

    React.useEffect(() => {
      onSearch?.(debounced);
    }, [debounced, onSearch]);

    return (
      <InputBase
        ref={ref}
        value={value}
        onChange={onChange}
        leftSlot={<Search size={18} />}
        rightSlot={
          loading ? (
            <SearchLoading />
          ) : allowClear && search ? (
            <SearchClearButton
              onClick={() =>
                onChange?.({
                  target: {
                    value: "",
                  },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
          ) : null
        }
        {...props}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";
