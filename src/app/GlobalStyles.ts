import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    scroll-behavior:smooth;
    -webkit-text-size-adjust:100%;
  }

  html,
  body,
  #root{
    min-height:100%;
  }

  body{
    font-family:${({ theme }) => theme.typography.fontFamily.body};
    font-size:${({ theme }) => theme.typography.fontSize.md};
    line-height:1.5;
    background:${({ theme }) => theme.semantic.background.primary};
    color:${({ theme }) => theme.semantic.text.primary};
    overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-rendering:optimizeLegibility;
  }

  :focus-visible{
    outline:2px solid ${({ theme }) => theme.semantic.border.focus};
    outline-offset:2px;
  }

  ::selection{
    background:${({ theme }) => theme.semantic.brand.subtle};
    color:${({ theme }) => theme.semantic.text.primary};
  }

  a{
    color:inherit;
    text-decoration:none;
  }

  button{
    font:inherit;
    color:inherit;
    border:none;
    background:none;
    cursor:pointer;
  }

  button:disabled{
    cursor:not-allowed;
  }

  img,
  picture,
  svg,
  video,
  canvas{
    display:block;
    max-width:100%;
  }

  img{
    height:auto;
  }

  ul,
  ol{
    list-style:none;
  }

  input,
  textarea,
  select,
  button{
    font:inherit;
  }

  input,
  textarea,
  select{
    color:inherit;
    background:transparent;
    outline:none;
  }

  textarea{
    resize:vertical;
  }

  table{
    width:100%;
    border-collapse:collapse;
  }

  :root{

    /* Surface */

    --surface-primary:${({ theme }) => theme.semantic.surface.primary};
    --surface-secondary:${({ theme }) => theme.semantic.surface.secondary};
    --surface-elevated:${({ theme }) => theme.semantic.surface.elevated};

    /* Text */

    --text-primary:${({ theme }) => theme.semantic.text.primary};
    --text-secondary:${({ theme }) => theme.semantic.text.secondary};
    --text-muted:${({ theme }) => theme.semantic.text.muted};

    /* Border */

    --border-primary:${({ theme }) => theme.semantic.border.primary};
    --border-secondary:${({ theme }) => theme.semantic.border.secondary};
  }
`;
