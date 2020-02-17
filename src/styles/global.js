import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Muli', Arial, sans-serif;
    font: 18px;
    box-sizing: border-box;
    overflow-y: scroll;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  a, button {
    border: none;
    outline: none;
    color: inherit;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    cursor: pointer;
  }
  a:active,
  a:hover,
  a:visited,
  button:active,
  button:hover {
    color: inherit;
    outline-width: 0;
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    border-style: none;
  }
`;
