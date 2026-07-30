import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GroupTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.md};

  font-size: 1.25rem;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary[900]};
`;

export const Table = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary[200]};

  border-radius: ${({ theme }) => theme.radius.md};

  overflow: hidden;
`;

export const Row = styled.div`
  display: grid;

  grid-template-columns: 220px 1fr;

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[200]};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.div`
  padding: ${({ theme }) => theme.spacing.md};

  font-weight: 500;

  background: ${({ theme }) => theme.colors.primary[50]};

  color: ${({ theme }) => theme.colors.primary[900]};
`;

export const Value = styled.div`
  padding: ${({ theme }) => theme.spacing.md};

  color: ${({ theme }) => theme.colors.primary[700]};
`;
