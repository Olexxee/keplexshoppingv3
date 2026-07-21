import styled from "styled-components";

export const Root = styled.header`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Results = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
