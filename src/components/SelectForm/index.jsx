import { Select, FormSelect, Label } from './styles';

const SelectForm = (props) => {

  return(
    <FormSelect>
      <Label>{props.label}</Label>
      <Select required={props}>
        { props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </Select>
    </FormSelect>
  )
}

export default SelectForm