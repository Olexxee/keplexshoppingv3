import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Preview = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: ${({ theme }: { theme: any }) => theme.radius.lg};
  background: ${({ theme }: { theme: any }) => theme.colors.surface};
  border: 1px solid ${({ theme }: { theme: any }) => theme.colors.border};
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ThumbnailList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
`;

export const Thumbnail = styled.button<{ $active?: boolean }>`
  width: 72px;
  height: 72px;
  flex-shrink: 0;

  padding: 0;

  overflow: hidden;

  cursor: pointer;

  border-radius: ${({ theme }: { theme: any }) => theme.radius.md};

  border: 2px solid
    ${({ theme, $active }: { theme: any; $active?: boolean }) =>
      $active ? theme.colors.primary : theme.colors.border};

  background: transparent;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
