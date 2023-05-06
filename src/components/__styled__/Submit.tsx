import { styled } from 'solid-styled-components'

const Submit = styled('button')`
  height: 40px;
  background: transparent;
  border: 2px solid #ffffff;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 24px;
  margin: 24px 0;
  box-shadow: 0px 0px 8px #a2848c, 0px 0px 4px #906777;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #234771;
  }
`

export default Submit
