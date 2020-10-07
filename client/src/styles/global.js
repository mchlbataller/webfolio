import "fontsource-open-sans";
import "fontsource-raleway";

import { colors } from "theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Open Sans';
    }

    html {
        scroll-behavior: smooth;
        background: black;
    }

    body {
        background: ${colors.dark.bodyBackground};
    }
`;
