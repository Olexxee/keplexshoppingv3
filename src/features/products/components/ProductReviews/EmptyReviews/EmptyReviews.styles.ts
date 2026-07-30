import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing.md};

  padding: ${({ theme }) => theme.spacing["3xl"]};

  border: 1px dashed ${({ theme }) => (theme as any).colors.border};

  border-radius: ${({ theme }) => theme.radius.lg};

  text-align: center;
`;

export const Title = styled.h3`
  margin: 0;

  color: ${({ theme }) => (theme as any).colors.textPrimary};
`;

export const Description = styled.p`
  margin: 0;

  color: ${({ theme }) => (theme as any).colors.textSecondary};
`;
