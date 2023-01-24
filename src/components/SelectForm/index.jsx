import { Select, FormSelect, Label } from './styles';

const SelectForm = ({label, value, items, onChange, ...props}) => {
  return(
    <FormSelect>
      <Label>{label}</Label>
      <Select onChange={event => onChange(event.target.value)} required={props} value={value} {...props}>
        { items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </Select>
    </FormSelect>
  )
}

export default SelectForm