import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${({ theme }) => theme.bgImage});
    background-size: 900px;
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  };
  .MuiCard-root{
    background: ${({ theme }) => theme.cardcolor};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.border};
  };
  .MuiAppBar-root{
    background: ${({ theme }) => theme.navColor};
    color: ${({ theme }) => theme.text};
  };
  .MuiTypography-h6{
    color: ${({ theme }) => theme.text};
    font-weight: bold !important;
    font-size: 2em !important; 
  };
  .MuiSvgIcon-root{
    color: ${({ theme }) => theme.text};
  };
  .dark-mode-toggle{
    color: ${({ theme }) => theme.text};
    border: none;
    background-color: ${({ theme }) => theme.navColor};
  };
  .MuiCardHeader-title{
    font-weight: bold !important;
    font-size: 1em !important;
  };

  .link{
  color: #FFF;
  };
  .MuiCardHeader-subheader{
    font-style: italic;
    margin: 0;
    color: ${({ theme }) => theme.mutedColor};;
  }
  	`;
