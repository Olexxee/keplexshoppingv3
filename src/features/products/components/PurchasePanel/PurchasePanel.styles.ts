import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  padding: ${({ theme }) => theme.spacing.xl};

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => (theme as any).colors?.border ?? '#e5e7eb'};

  background: ${({ theme }) => (theme as any).colors?.surface ?? '#ffffff'};
`;

export const Actions = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const AddToCartButton = styled.button`
  height: 48px;

  border: none;

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => (theme as any).colors?.surfaceSecondary ?? '#f3f4f6'};

  color: ${({ theme }) => (theme as any).colors?.text ?? '#111827'};

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BuyNowButton = styled.button`
  height: 48px;

  border: none;

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
