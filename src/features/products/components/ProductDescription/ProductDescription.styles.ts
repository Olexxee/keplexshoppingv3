import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 1.75rem;

  font-weight: 700;

  color: #111827;
`;

export const Paragraph = styled.p`
  margin: 0;

  line-height: 1.8;

  color: #6b7280;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const BlockTitle = styled.h3`
  margin: 0;

  font-size: 1.125rem;

  font-weight: 600;

  color: #111827;
`;

export const List = styled.ul`
  margin: 0;

  padding-left: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ListItem = styled.li`
  color: #6b7280;

  line-height: 1.7;
`;
