import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;

  gap: 2px;
`;

export const ReviewCount = styled.span`
  color: ${({ theme }) => theme.semantic.text.secondary};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
