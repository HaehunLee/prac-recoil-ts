import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// `normalize`로 기본 css가 초기화
// global-style 선언
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;