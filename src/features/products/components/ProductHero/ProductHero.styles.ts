import styled from "styled-components";

export const Root = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);

  gap: ${({ theme }) => theme.spacing["2xl"]};

  align-items: start;

  ${({ theme }) => theme.media.desktop`
    grid-template-columns: 1fr;
  `}
`;
