import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Brand = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.primary[600]};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  color: ${({ theme }) => theme.colors.primary[900]};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary[700]};

  line-height: 1.6;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;