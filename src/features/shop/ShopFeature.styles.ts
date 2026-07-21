import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
