import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  padding-top: ${({ theme }) => theme.spacing.md};

  border-top: 1px solid ${({ theme }) => theme.colors.neutral[300]};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.neutral[600]};
`;
