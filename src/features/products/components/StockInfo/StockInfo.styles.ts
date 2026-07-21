import styled from "styled-components";

export const Root = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.info};
`;
