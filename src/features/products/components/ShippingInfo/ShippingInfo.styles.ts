import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => ((theme.colors as any).gray?.[500] ?? '#6B7280')};
`;
