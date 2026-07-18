import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;

  align-items: center;

  gap: ${({ theme }) => theme.spacing.xl}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const Item = styled.a`
  text-decoration: none;

  color: inherit;

  font-size: ${({ theme }) => theme.typography.fontSize.md};

  transition: color 0.2s ease;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;
