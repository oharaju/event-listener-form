import { FormCamp, Label, InputStyles } from './styles';

const Input = (props) => {
  return(
    <FormCamp>
      <Label>
        {props.label}
      </Label>
      <InputStyles placeholder={props.placeholder} />
    </FormCamp>
  )
}

export default Input