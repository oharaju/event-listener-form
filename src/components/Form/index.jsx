import { Title, Card, CardInside } from './styles';
import Input from '../Input';
import SelectForm from '../SelectForm'
import Button from '../Button'
import ButtonProps from '../ButtonDeconstruction'
import { useState } from 'react';

function Form(props) {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.colaboradorCadastrado({
      name,
      office,
      image,
      team
    })
  }

  return(
    <Card>
      <CardInside>
        <Title>
          Preencha os dados para criar o card do colaborador.
        </Title>
        <form onSubmit={handleSubmit}>
          <Input 
            label="Nome" 
            placeholder="Digite seu nome" 
            required={true}
            value={name}
            onChange={setName}
          />
          <Input 
            label="Cargo" 
            placeholder="Digite seu cargo" 
            required={true}
            value={office}
            onChange={setOffice}
          />
          <Input 
            label="Imagem" 
            placeholder="Digite o endereço da imagem"
            value={image}
            onChange={setImage}
          />
          <SelectForm
            items={times} 
            label="Time" 
            required={true}
            value={team}
            onChange={setTeam}
          />
          <Button type="submit">Criar Card</Button>
        </form>

        {/* <ButtonProps type="button" id="meubotao" className="classeNova" onClick={() => console.log('click')}>meu botao</ButtonProps> */}
      </CardInside>
  </Card>
)}

export default Form;