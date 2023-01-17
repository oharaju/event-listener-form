import { Title, Card, CardInside, CardButton, Button } from './styles';
import Input from './../Input';
import SelectForm from './../SelectForm'

const CardForm = () => (
  <Card>
      <CardInside>
        <Title>
          Preencha os dados para criar o card do colaborador.
        </Title>
        <form>
          <Input label="Nome" placeholder="Digite seu nome" />
          <Input label="Cargo" placeholder="Digite seu cargo" />
          <Input label="Imagem" placeholder="Adicione uma imagem" />
          <SelectForm />
          <CardButton>
            <Button>Criar card</Button>
          </CardButton>

        </form>
      </CardInside>
  </Card>
)

export default CardForm;