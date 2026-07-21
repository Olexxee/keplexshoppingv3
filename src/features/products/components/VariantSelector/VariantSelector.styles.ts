import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;
