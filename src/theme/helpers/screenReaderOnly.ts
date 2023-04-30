import { css } from 'solid-styled-components'

export const srOnly = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  margin: -1px;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`
