import { CardPeoples, Card, ImageWrapper, Image } from './styles';

const CardPeople = ({ name, office, image, colorBackground }) => {
  return (
    <CardPeoples>
      <Card>
        <ImageWrapper background={colorBackground}>
          <Image src={image} alt={name} />
        </ImageWrapper>
        <p>{name}</p>
        <p>{office}</p>
      </Card>
    </CardPeoples>
  )
}

export default CardPeople;