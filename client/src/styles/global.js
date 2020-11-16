import { colors } from "theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: sans-serif;
    }

    html {
        scroll-behavior: smooth;
        background: black;
    }

    body {
        background: ${colors.dark.bodyBackground};
    }
`;
