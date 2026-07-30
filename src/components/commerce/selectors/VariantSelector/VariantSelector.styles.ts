import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as any).spacing.md};
`;

export const Label = styled.span`
  font-size: ${({ theme }) => (theme as any).fontSizes.sm};
  font-weight: ${({ theme }) => (theme as any).fontWeights.medium};
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => (theme as any).spacing.sm};
`;

export const Option = styled.button<{ $selected?: boolean }>`
  min-width: 48px;

  height: 40px;

  padding: 0 ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => (theme as any).radius.md};

  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? (theme as any).colors.primary : (theme as any).colors.border};

  background: ${({ theme, $selected }) =>
    $selected ? (theme as any).colors.primary : (theme as any).colors.surface};

  color: ${({ theme, $selected }) => ($selected ? "#fff" : (theme as any).colors.text)};

  cursor: pointer;

  transition: 0.2s;
`;
