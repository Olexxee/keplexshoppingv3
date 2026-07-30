import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  padding: ${({ theme }) => theme.spacing.xl};

  border: 1px solid ${({ theme }) => theme.colors.primary[200]};

  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.colors.primary[50]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Score = styled.span`
  font-size: 2rem;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.primary[900]};
`;

export const Count = styled.span`
  color: ${({ theme }) => theme.colors.primary[600]};

  font-size: 0.875rem;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
