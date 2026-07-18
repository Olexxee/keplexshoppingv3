import styled from "styled-components";

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  border: none;
  border-radius: 50%;

  background: transparent;

  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[100]};
  }

  svg {
    width: 22px;
    height: 22px;
  }

  span {
    position: absolute;

    top: 4px;
    right: 4px;

    min-width: 18px;
    height: 18px;

    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 10px;
    font-weight: 600;

    background: ${({ theme }) => theme.colors.primary[600]};
    color: ${({ theme }) => theme.colors.neutral[0]};
  }
`;
