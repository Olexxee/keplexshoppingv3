import styled from "styled-components";
import { Typography } from "../../../typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xs};
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing.sm};
`;

export const DiscountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CompareAtPrice = styled(Typography)`
  text-decoration: line-through;
`;
