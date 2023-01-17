import { Title, Card, CardInside, CardButton, Button } from './style';
import Form from './../Form';

const CardForm = () => (
  <Card>
      <CardInside>
        <Title>
          Preencha os dados para criar o card do colaborador.
        </Title>
        <form>
          <Form label="Nome" placeholder="Digite seu nome" />
          <Form label="Cargo" placeholder="Digite seu cargo" />
          <Form label="Imagem" placeholder="Adicione uma imagem" />
          <CardButton>
            <Button>Criar card</Button>
          </CardButton>
          
        </form>
      </CardInside>
  </Card>
)

export default CardForm;