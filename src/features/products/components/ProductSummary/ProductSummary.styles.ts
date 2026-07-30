import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  position: sticky;

  top: ${({ theme }) => theme.spacing.lg};

  align-self: start;
`;
