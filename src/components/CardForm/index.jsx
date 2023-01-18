import { Title, Card, CardInside, CardButton, Button } from './styles';
import Input from './../Input';
import SelectForm from './../SelectForm'

function CardForm() {
  const teams = [
    '',
    'Programação',
    'Front-End',
    'Data Science',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]
  return(
    <Card>
      <CardInside>
        <Title>
          Preencha os dados para criar o card do colaborador.
        </Title>
        <form>
          <Input label="Nome" placeholder="Digite seu nome" />
          <Input label="Cargo" placeholder="Digite seu cargo" />
          <Input label="Imagem" placeholder="Adicione uma imagem" />
          <SelectForm items={teams} label="Time" />
          
          <CardButton>
            <Button>Criar card</Button>
          </CardButton>

        </form>
      </CardInside>
  </Card>
)}

export default CardForm;