import { styled } from 'solid-styled-components'

const Input = styled('input')`
  display: block;
  height: 40px;
  width: 100%;
  margin-bottom: 4px;
  padding: 0 12px;
  background: #234771;
  border: 1px solid transparent;
  color: #fff;

  &:focus {
    outline: none;
    border-color: white;
  }
`

export default Input
