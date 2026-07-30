import styled from "styled-components";

export const Root = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  gap: ${({ theme }) => theme.spacing.lg};
`;
