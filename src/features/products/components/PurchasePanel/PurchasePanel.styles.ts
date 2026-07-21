import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  padding-top: ${({ theme }) => theme.spacing.lg};

  border-top: 1px solid ${({ theme }) => theme.colors.primary[200]};
`;