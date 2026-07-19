import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
