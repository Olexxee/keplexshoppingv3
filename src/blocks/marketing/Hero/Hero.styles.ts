import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Statistics = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    order: -1;
  }
`;
