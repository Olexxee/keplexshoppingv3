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
  }

  body{
    font-family:${({ theme }) => theme.typography.fontFamily.body};
    background:${({ theme }) => theme.semantic.background.primary};
    color:${({ theme }) => theme.semantic.text.primary};
    overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button{
    border:none;
    background:none;
    cursor:pointer;
    font:inherit;
  }

  img{
    display:block;
    max-width:100%;
  }

  ul,
  ol{
    list-style:none;
  }

  input,
  textarea,
  select{
    font:inherit;
    outline:none;
  }
`;
