import { FormCamp, Label, InputStyles } from './styles';

const Input = ({label, placeholder, required, value, onChange, ...props}) => {
  return(
    <FormCamp>
      <Label>{label}</Label>
      <InputStyles value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} required={required} {...props}  />
    </FormCamp>
  )
}

export default Input