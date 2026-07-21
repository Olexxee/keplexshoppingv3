import styled, { css } from "styled-components";

interface StyledProps {
  $active?: boolean;
}

export const StyledOverlayActionButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  border-radius: ${({ theme }) => theme.radius.full};

  background: ${({ theme }) => theme.semantic.surface.elevated};

  color: ${({ theme }) => theme.semantic.text.primary};

  box-shadow: ${({ theme }) => theme.shadows.md};

  backdrop-filter: blur(12px);

  transition:
    transform ${({ theme }) => theme.motion.duration.fast}
      ${({ theme }) => theme.motion.easing.smooth},
    background ${({ theme }) => theme.motion.duration.fast}
      ${({ theme }) => theme.motion.easing.smooth},
    color ${({ theme }) => theme.motion.duration.fast}
      ${({ theme }) => theme.motion.easing.smooth};

  &:hover {
    transform: translateY(-2px);

    background: ${({ theme }) => theme.semantic.surface.hover};
  }

  &:active {
    transform: scale(${({ theme }) => theme.motion.scale.pressed});
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.semantic.status.danger.border};
    `}
`;
