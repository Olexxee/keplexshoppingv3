import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }: any) => theme.spacing.md};
`;

export const Brand = styled.span`
  font-size: ${({ theme }: any) => theme.fontSizes.sm};
  color: ${({ theme }: any) => theme.colors.textSecondary};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: ${({ theme }: any) => theme.fontSizes["3xl"]};
  font-weight: ${({ theme }: any) => theme.fontWeights.bold};
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: ${({ theme }: any) => theme.fontSizes.md};
  color: ${({ theme }: any) => theme.colors.textSecondary};
  line-height: 1.6;
`;
