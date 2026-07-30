import styled from "styled-components";

export const Root = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(360px, 480px);
  gap: ${({ theme }) => theme.spacing["3xl"]};

  align-items: start;

  /* use media helper as a tagged template to avoid interpolation type issues */
  ${({ theme }) => theme.media.wide`
    grid-template-columns: 1fr;
  `}
`;