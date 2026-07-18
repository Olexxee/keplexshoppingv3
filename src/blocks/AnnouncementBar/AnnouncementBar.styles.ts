import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 40px;

  background: ${({ theme }) => theme.colors.neutral[900]};
  color: ${({ theme }) => theme.colors.neutral[0]};

  padding: ${({ theme }) => theme.spacing.sm}px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const Action = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
