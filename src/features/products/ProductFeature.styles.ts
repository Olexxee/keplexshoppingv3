import styled from "styled-components";

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["3xl"]};
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};
`;
