import { createGlobalStyles } from 'solid-styled-components'

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
        background: ${(props: any) => props.theme.colors.black};
        color: ${(props: any) => props.theme.colors.white};
    }
`

export default GlobalStyles
