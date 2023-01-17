import { FormCamp, Label, Input } from './style';

const Form = (props) => {
  return(
    <FormCamp>
      <Label>
        {props.label}
      </Label>
      <Input placeholder={props.placeholder} />
    </FormCamp>
  )
}

export default Form