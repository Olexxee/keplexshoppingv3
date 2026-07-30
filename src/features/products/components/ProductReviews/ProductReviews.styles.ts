import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing["2xl"]};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.lg};
`;
