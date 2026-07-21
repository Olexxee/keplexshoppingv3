import styled from "styled-components";

export const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  border-radius: ${({ theme }) => theme.radius.xl};

  background: ${({ theme }) => theme.semantic.surface.primary};

  border: 1px solid ${({ theme }) => theme.semantic.border.primary};

  box-shadow: ${({ theme }) => theme.shadows.sm};

  transition:
    transform ${({ theme }) => theme.motion.duration.normal}
      ${({ theme }) => theme.motion.easing.smooth},
    box-shadow ${({ theme }) => theme.motion.duration.normal}
      ${({ theme }) => theme.motion.easing.smooth},
    border-color ${({ theme }) => theme.motion.duration.normal}
      ${({ theme }) => theme.motion.easing.smooth};

  &:hover {
    transform: translateY(-4px);

    border-color: ${({ theme }) => theme.semantic.brand.primary};

    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  aspect-ratio: 1;

  overflow: hidden;

  background: ${({ theme }) => theme.semantic.surface.secondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform ${({ theme }) => theme.motion.duration.slow}
      ${({ theme }) => theme.motion.easing.smooth};
  }

  ${StyledProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0));

  pointer-events: none;
`;

export const BadgeContainer = styled.div`
  position: absolute;

  top: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

export const ActionsContainer = styled.div`
  position: absolute;
  inset: 0;

  pointer-events: none;
`;

export const WishlistButtonWrapper = styled.div`
  position: absolute;

  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};

  pointer-events: auto;
`;

export const QuickViewWrapper = styled.div`
  position: absolute;

  left: 50%;
  bottom: ${({ theme }) => theme.spacing.lg};

  transform: translate(-50%, 16px);

  opacity: 0;

  transition:
    opacity ${({ theme }) => theme.motion.duration.normal}
      ${({ theme }) => theme.motion.easing.smooth},
    transform ${({ theme }) => theme.motion.duration.normal}
      ${({ theme }) => theme.motion.easing.smooth};

  pointer-events: auto;

  ${StyledProductCard}:hover & {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  gap: ${({ theme }) => theme.spacing.md};

  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Brand = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  color: ${({ theme }) => theme.semantic.text.secondary};

  text-transform: uppercase;

  letter-spacing: 0.08em;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  color: ${({ theme }) => theme.semantic.text.primary};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.sm};

  flex-wrap: wrap;
`;

export const Footer = styled.div`
  margin-top: auto;

  padding-top: ${({ theme }) => theme.spacing.sm};
`;