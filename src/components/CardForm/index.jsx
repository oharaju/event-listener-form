import { Title, Card, CardInside } from './styles';
import Input from './../Input';
import SelectForm from './../SelectForm'
import Button from '../Button'
import ButtonCaio from '../ButtonDeconstruction'

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
          <Button type="submit">Criar Card</Button>

          <ButtonCaio type="button" id="meubotao" className="classeNova" onClick={() => console.log('click')}>meu botao</ButtonCaio>

        </form>
      </CardInside>
  </Card>
)}

export default CardForm;