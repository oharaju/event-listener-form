import { CardButton, ButtonStyles } from './styles';

const Button = ({children}) => {
  return(
    <CardButton>
      <ButtonStyles>{children}</ButtonStyles>
    </CardButton>
  )
}

export default Button;