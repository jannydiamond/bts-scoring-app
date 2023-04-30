import FormGroup from 'components/__styled__/FormGroup'
import Input from 'components/__styled__/Input'
import Label from 'components/__styled__/Label'

type Props = {
  id: string
  label: string
  max?: number
}

const AmountInput = (props: Props) => {
  return (
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <Input id={props.id} type="number" value="0" step="1" min="0" max={props.max} />
    </FormGroup>
  )
}

export default AmountInput
