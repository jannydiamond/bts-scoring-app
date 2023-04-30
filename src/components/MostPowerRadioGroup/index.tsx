import FormGroup from 'components/__styled__/FormGroup'

type Props = {
  name: string
  onChange?: EventListener
  checkedValue: 'no' | 'yes' | 'tie'
}

const MostPowerRadioGroup = (props: Props) => {
  return (
    <FormGroup>
      <label>
        <input
          id={`${props.name}No`}
          type="radio"
          name={props.name}
          value="no"
          onChange={props.onChange}
          checked={props.checkedValue === 'no'}
        />{' '}
        No
      </label>
      <label>
        <input
          id={`${props.name}Yes`}
          type="radio"
          name={props.name}
          value="yes"
          onChange={props.onChange}
          checked={props.checkedValue === 'yes'}
        />{' '}
        Yes
      </label>
      <label>
        <input
          id={`${props.name}Tie`}
          type="radio"
          name={props.name}
          value="tie"
          onChange={props.onChange}
          checked={props.checkedValue === 'tie'}
        />{' '}
        Tie
      </label>
    </FormGroup>
  )
}

export default MostPowerRadioGroup
