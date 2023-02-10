import { Section, TimeTitle, Cards } from './styles';
import CardPeople from '../CardPeople';

const SectionTeams = (props) => {

  const teams = [
    {
      nameTeam: 'Programação',
      colorPrimary: '#D9F7E9',
      colorSecondary: '#57C278',
      id: '1'
    },

    {
      nameTeam: 'Front-End',
      colorPrimary: '#E8FFFF',
      colorSecondary: '#82CFFA',
      id: '2'
    },

    {
      nameTeam: 'Data Science',
      colorPrimary: '#E9FFE3',
      colorSecondary: '#A6D157',
      id: '3' 
    },

    {
      nameTeam: 'Devops',
      colorPrimary: '#FDE7E8',
      colorSecondary: '#E06B69',
      id: '4' 
    },

    {
      nameTeam: 'UX e Design',
      colorPrimary: '#FAE9F5',
      colorSecondary: '#DB6EBF',
      id: '5'
    },

    {
      nameTeam: 'Mobile',
      colorPrimary: '#FFF5DA',
      colorSecondary: '#FFBA05',
      id: '6'
    },

    {
      nameTeam: 'Inovação e Gestão',
      colorPrimary: '#FFEEDF',
      colorSecondary: '#FF8A29',
      id: '7' 
    },
  ]

  return (
    <div>
      {teams.map(team => (
        <Section key={team.id} style={{backgroundColor: team.colorPrimary}}>
          <TimeTitle style={{borderColor: team.colorSecondary}}>{team.nameTeam}</TimeTitle>
          <Cards>
            {props.colaboradores.map((colaborador) => {
              if(colaborador.time === team.nameTeam) {
                return <CardPeople key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />;
              }
            })}
          </Cards>
        </Section>
      ))}
    </div>
  )
}

export default SectionTeams;