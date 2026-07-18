import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 3rem;

  grid-template-columns: 1.2fr 1fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Media = styled.div`
  width: 100%;
`;
