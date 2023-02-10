import { CardPeoples, Card, ImageWrapper, Image } from './styles';

const CardPeople = ({ name, office, image }) => {
  return (
    <CardPeoples>
      <Card>
        <ImageWrapper>
          <Image src={image} alt={name} />
        </ImageWrapper>
        <p>{name}</p>
        <p>{office}</p>
      </Card>
    </CardPeoples>
  )
}

export default CardPeople;