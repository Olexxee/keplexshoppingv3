import React from "react";
import { cn } from "../../lib/cn";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

export const Table = ({
  striped = false,
  hoverable = false,
  bordered = false,
  compact = false,
  className,
  children,
  ...props
}: TableProps) => {
  return (
    <div className="w-full overflow-auto">
      <table
        className={cn(
          "w-full text-sm",
          bordered && "border border-border",
          className,
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child, {
            striped,
            hoverable,
            bordered,
            compact,
          } as any);
        })}
      </table>
    </div>
  );
};

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableHead = ({
  className,
  children,
  ...props
}: TableHeadProps) => {
  return (
    <thead className={cn("bg-muted/50", className)} {...props}>
      {children}
    </thead>
  );
};

interface TableHeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export const TableHeader = ({
  className,
  children,
  align = "left",
  ...props
}: TableHeaderProps) => {
  return (
    <th
      className={cn(
        "px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  striped?: boolean;
  hoverable?: boolean;
}

export const TableBody = ({
  className,
  children,
  striped = false,
  hoverable = false,
  ...props
}: TableBodyProps) => {
  return (
    <tbody className={cn("divide-y divide-border", className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          striped,
          hoverable,
          index,
        } as any);
      })}
    </tbody>
  );
};

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  striped?: boolean;
  hoverable?: boolean;
  index?: number;
}

export const TableRow = ({
  className,
  children,
  striped = false,
  hoverable = false,
  index = 0,
  ...props
}: TableRowProps) => {
  return (
    <tr
      className={cn(
        "transition-colors",
        striped && index % 2 === 1 && "bg-muted/30",
        hoverable && "hover:bg-muted/50 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  compact?: boolean;
}

export const TableCell = ({
  className,
  children,
  align = "left",
  compact = false,
  ...props
}: TableCellProps) => {
  return (
    <td
      className={cn(
        "px-4 text-foreground",
        compact ? "py-2" : "py-3",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
};
