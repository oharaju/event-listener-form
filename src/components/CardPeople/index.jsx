import { CardPeoples, Card, ImageWrapper, Image } from './styles';

const CardPeople = ({ nome, cargo, imagem }) => {
  return (
    <CardPeoples>
      <Card>
        <ImageWrapper>
          <Image src={imagem} alt={nome} />
        </ImageWrapper>
        <p>{nome}</p>
        <p>{cargo}</p>
      </Card>
    </CardPeoples>
  )
}

export default CardPeople;