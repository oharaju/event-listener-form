import { CardPeoples, Card, ImageWrapper, Image } from './styles';

const CardPeople = () => {
  return (
    <CardPeoples>
      <Card>
        <ImageWrapper>
          <Image src='https://i.pravatar.cc/300' />
        </ImageWrapper>
        <p>Juliana Ohara</p>
        <p>Desenvolvedora de software e instrutora</p>
      </Card>
    </CardPeoples>
  )
}

export default CardPeople;