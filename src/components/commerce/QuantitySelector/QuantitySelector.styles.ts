import styled from "styled-components";
import { InputBase } from "../../form/input-base";

export const Root = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.neutral[50]};

  cursor: pointer;

  transition: ${({ theme }) => theme.motion.duration.fast} ${({ theme }) => theme.motion.easing.standard};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.neutral[100]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityInput = styled(InputBase)`
  width: 4rem;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
`;
