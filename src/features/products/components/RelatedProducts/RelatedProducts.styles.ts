import styled from "styled-components";

type AppTheme = {
  spacing: {
    xl: string;
  };
  fontSize: {
    "2xl": string;
  };
  fontWeight: {
    bold: string;
  };
  colors: {
    text: string;
  };
};

const getTheme = (theme: unknown): AppTheme => theme as AppTheme;

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => getTheme(theme).spacing.xl};
`;

export const Heading = styled.h2`
  margin: 0;

  font-size: ${({ theme }) => getTheme(theme).fontSize["2xl"]};

  font-weight: ${({ theme }) => getTheme(theme).fontWeight.bold};

  color: ${({ theme }) => getTheme(theme).colors.text};
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));

  gap: ${({ theme }) => getTheme(theme).spacing.xl};
`;
