import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Indicator = styled.span<{
  $status: "in-stock" | "low-stock" | "out-of-stock";
}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background: ${({ theme, $status }) => {
    switch ($status) {
      case "in-stock":
        return theme.colors.success;

      case "low-stock":
        return theme.colors.warning;

      default:
        return (theme.colors as any).error ?? "#DC2626";
    }
  }};
`;

export const Label = styled.span`
  font-size: 0.875rem;
`;
