import styled from "styled-components";

export const Wrapper = styled.div`
  text-decoration: none;

  color: inherit;
`;

export const Text = styled.h1`
  margin: 0;

  font-size: ${({ theme }) => theme.typography.fontSize.xl};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;
