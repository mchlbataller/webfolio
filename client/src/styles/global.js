import { colors } from "theme";
import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

export const GlobalStyles = createGlobalStyle`
    ${fonts}
    * {
        font-family: 'Open Sans', sans-serif;
    }

    html {
        scroll-behavior: smooth;
        background: black;
    }

    body {
        background: ${colors.dark.bodyBackground};
    }
`;
