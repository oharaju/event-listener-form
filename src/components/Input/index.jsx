import { FormCamp, Label, InputStyles } from './styles';

const Input = ({label, placeholder, required}) => {
  return(
    <FormCamp>
      <Label>{label}</Label>
      <InputStyles placeholder={placeholder} required={required} />
    </FormCamp>
  )
}

export default Input