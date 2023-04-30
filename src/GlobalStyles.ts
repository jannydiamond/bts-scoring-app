import { createGlobalStyles } from 'solid-styled-components'
import '@fontsource/open-sans'
import '@fontsource/raleway'

const GlobalStyles = createGlobalStyles`
    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', Arial, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        margin: 0;
        padding: 0 24px;

        /* FIXME: Typings */
        background: #0C1929;
        color: ${(props: any) => props.theme.colors.white};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Raleway', Arial, sans-serif;
        text-shadow: 0px -2px 8px #A2848C, 0px 0px 4px #906777;
    }
`

export default GlobalStyles
