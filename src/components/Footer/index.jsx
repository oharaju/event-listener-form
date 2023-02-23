import { Container, Social, FooterContainer, Dev } from './styles';

const Footer = () => {
  return (
    <>
      <Container>
        <FooterContainer>
          <Social>
            <a href="#"><img src="./images/icon-facebook.png" alt="Ícone do Facebook"/></a>
            <a href="#"><img src="./images/icon-twitter.png" alt="Ícone do Twitter"/></a>
            <a href="#"><img src="./images/icon-instagram.png" alt="Ícone do Instagram"/></a>
          </Social>
            <img src="./images/logo-organo.png" alt="Logo Organograma" />
          <Dev>Desenvolvido por Júlia.</Dev>
        </FooterContainer>
      </Container>
    </>
  )
}

export default Footer;