import styled from "styled-components";

export const Root = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: 8px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.neutral[50]};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[100]};
  }
`;

export const Value = styled.div`
  min-width: 48px;
  text-align: center;
  font-weight: 500;
`;
