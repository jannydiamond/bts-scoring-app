// import original module declarations
import 'solid-styled-components'

// and extend them!
declare module 'solid-styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string
        light: string
        dark: string
      }
      white: string
      black: string
    }
  }
}
