import { Title, Card, CardInside } from './styles';
import Input from './../Input';
import SelectForm from './../SelectForm'
import Button from '../Button'
import ButtonCaio from '../ButtonDeconstruction'

function CardForm() {

  function SaveForm(e) {
    e.preventDefault();
    console.log('olá')
  }

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
        <form onSubmit={SaveForm}>
          <Input label="Nome" placeholder="Digite seu nome" required={true} />
          <Input label="Cargo" placeholder="Digite seu cargo" required={true} />
          <Input label="Imagem" placeholder="Adicione uma imagem" required={true} />
          <SelectForm items={teams} label="Time" required={true} />
          <Button type="submit">Criar Card</Button>
        </form>

        {/* <ButtonCaio type="button" id="meubotao" className="classeNova" onClick={() => console.log('click')}>meu botao</ButtonCaio> */}
      </CardInside>
  </Card>
)}

export default CardForm;