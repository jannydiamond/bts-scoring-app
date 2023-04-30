/* @refresh reload */
import { render } from 'solid-js/web'

import { ThemeProvider } from 'solid-styled-components'
import App from 'App'
import GlobalStyles from 'GlobalStyles'
import defaultTheme from 'theme/default'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  )
}

render(
  () => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  ),
  root!
)
