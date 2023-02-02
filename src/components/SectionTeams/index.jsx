import { Time, Section } from './styles';
import CardPeople from '../CardPeople';

const SectionTeams = (props) => {

  const teams = [
    {
      nome: 'Programação',
      colorPrimary: '#D9F7E9',
      colorSecondary: '#57C278', 
    },

    {
      nome: 'Front-End',
      colorPrimary: '#E8FFFF',
      colorSecondary: '#82CFFA', 
    },

    {
      nome: 'Data Science',
      colorPrimary: '#E9FFE3',
      colorSecondary: '#A6D157', 
    },

    {
      nome: 'Devops',
      colorPrimary: '#FDE7E8',
      colorSecondary: '#E06B69', 
    },

    {
      nome: 'UX e Design',
      colorPrimary: '#FAE9F5',
      colorSecondary: '#DB6EBF', 
    },

    {
      nome: 'Mobile',
      colorPrimary: '#FFF5DA',
      colorSecondary: '#FFBA05', 
    },

    {
      nome: 'Inovação e Gestão',
      colorPrimary: '#FFEEDF',
      colorSecondary: '#FF8A29', 
    },
  ]

  return (
    <div>
      {teams.map(team => (
        <Section key={team.nome} style={{backgroundColor: team.colorPrimary}}>
          <Time style={{borderColor: team.colorSecondary}}>{team.nome}</Time>

          {props.colaboradores.map((props => 
          <CardPeople key={props} nome={props.nome} cargo={props.cargo} />))}

        </Section>
      ))}
    </div>
  )
}

export default SectionTeams;