import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
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
    font-weight: bold;
  };
  .MuiSvgIcon-root{
    color: ${({ theme }) => theme.text};
  }	`;
