import { CardButton, ButtonStyles } from './styles';

const ButtonCaio = ({children, type, ...props}) => {
  return(
    <CardButton>
      <ButtonStyles type={type} {...props}>{children}</ButtonStyles>
    </CardButton>
  )
}

export default ButtonCaio;