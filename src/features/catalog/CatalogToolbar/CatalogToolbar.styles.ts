import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  margin-bottom: 2rem;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  flex: 1;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SearchWrapper = styled.div`
  min-width: 280px;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
