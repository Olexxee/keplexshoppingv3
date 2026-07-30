import styled from "styled-components";

export const Root = styled.nav`
  display: flex;

  justify-content: center;

  align-items: center;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-top: ${({ theme }) => theme.spacing["2xl"]};
`;

export const PageInfo = styled.div`
  min-width: 100px;

  text-align: center;
`;
