import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary[50]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
`;

export const Thumbnail = styled.button<{ $active?: boolean }>`
  width: 72px;
  height: 72px;

  border-radius: ${({ theme }) => theme.radius.md};

  overflow: hidden;

  border: 2px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary[500] : theme.colors.primary[200]};

  background: transparent;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
