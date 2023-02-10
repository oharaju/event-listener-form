import { Title, Card, CardInside } from './styles';
import Input from '../Input';
import SelectForm from '../SelectForm'
import Button from '../Button'
import ButtonProps from '../ButtonDeconstruction'
import { useState } from 'react';

function Form(props) {

  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.colaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
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
            value={nome}
            onChange={setNome}
          />
          <Input 
            label="Cargo" 
            placeholder="Digite seu cargo" 
            required={true}
            value={cargo}
            onChange={setCargo}
          />
          <Input 
            label="Imagem" 
            placeholder="Digite o endereço da imagem"
            value={imagem}
            onChange={setImagem}
          />
          <SelectForm
            items={teams} 
            label="Time" 
            required={true}
            value={time}
            onChange={setTime}
          />
          <Button type="submit">Criar Card</Button>
        </form>

        {/* <ButtonProps type="button" id="meubotao" className="classeNova" onClick={() => console.log('click')}>meu botao</ButtonProps> */}
      </CardInside>
  </Card>
)}

export default Form;