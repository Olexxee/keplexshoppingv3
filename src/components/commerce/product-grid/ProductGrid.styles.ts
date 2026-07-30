import styled from "styled-components";

export const Root = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));

  gap: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: ${({ theme }) => theme.spacing["4xl"]};
`;
