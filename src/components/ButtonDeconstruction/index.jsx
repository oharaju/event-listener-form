import { CardButton, ButtonStyles } from './styles';

const ButtonProps = ({children, type, ...props}) => {

  return(
    <CardButton>
      <ButtonStyles type={type} {...props}>{children}</ButtonStyles>
    </CardButton>
  )
}

export default ButtonProps;