import styled from "styled-components";

export const Root = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: ${({ theme }) => theme.spacing.lg};

  flex-wrap: wrap;
`;

export const Left = styled.div`
  display: flex;

  align-items: center;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const Right = styled.div`
  display: flex;

  align-items: center;

  gap: ${({ theme }) => theme.spacing.md};
`;
