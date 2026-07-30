import styled from "styled-components";

export const Root = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }: any) => theme.spacing.md};

  padding: ${({ theme }: any) => theme.spacing.xl};

  border: 1px solid ${({ theme }: any) => theme.colors.border};

  border-radius: ${({ theme }: any) => theme.radius.lg};

  background: ${({ theme }: any) => theme.colors.surface};
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  gap: ${({ theme }: any) => theme.spacing.md};
`;

export const AuthorBlock = styled.div`
  display: flex;

  flex-direction: column;

  gap: ${({ theme }: any) => theme.spacing.xs};
`;

export const Author = styled.span`
  font-weight: ${({ theme }: any) => theme.fontWeights.semibold};

  color: ${({ theme }: any) => theme.colors.textPrimary};
`;

export const DateText = styled.span`
  font-size: ${({ theme }: any) => theme.fontSizes.sm};

  color: ${({ theme }: any) => theme.colors.textSecondary};
`;

export const Title = styled.h4`
  margin: 0;

  font-size: ${({ theme }: any) => theme.fontSizes.lg};

  color: ${({ theme }: any) => theme.colors.textPrimary};
`;

export const Comment = styled.p`
  margin: 0;

  line-height: 1.8;

  color: ${({ theme }: any) => theme.colors.textSecondary};
`;

export const Footer = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: ${({ theme }: any) => theme.spacing.md};
`;
