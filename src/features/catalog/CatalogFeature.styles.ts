import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing["2xl"]};

  width: 100%;
`;

export const Content = styled.div`
  display: grid;

  grid-template-columns: 280px minmax(0, 1fr);

  gap: ${({ theme }) => theme.spacing["2xl"]};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
