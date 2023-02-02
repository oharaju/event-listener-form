import { CardPeoples, Card, ImageWrapper, Image } from './styles';

const CardPeople = ({ imagem, nome, cargo }) => {
  return (
    <CardPeoples>
      <Card>
        <ImageWrapper>
          <Image src='https://github.com/oharaju.png' alt={nome} />
        </ImageWrapper>
        <p>{nome}</p>
        <p>{cargo}</p>
      </Card>
    </CardPeoples>
  )
}

export default CardPeople;