import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.primary[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[200]};
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 72px;
  gap: 2rem;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Center = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
