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


  const listaColaboradores = props.colaboradores.map((colaborador) => {
    return colaborador.team
  })
  
  console.log(listaColaboradores)

  return (
    <div>
      {props.colaboradores.length > 0 &&
        <>
          {teams.map((team) => {
            if(listaColaboradores.includes(team.nameTeam)) {
              return (
                <Section key={team.id} style={{backgroundColor: team.colorPrimary}}>
                  <TimeTitle style={{borderColor: team.colorSecondary}}>{team.nameTeam}</TimeTitle>
                  <Cards>
                    {props.colaboradores.map((colaborador) => {
                      if(colaborador.team === team.nameTeam) {
                        return <CardPeople key={colaborador.name} name={colaborador.name} office={colaborador.office} image={colaborador.image} />;
                      }
                    })}
                  </Cards>
                </Section>
              )
            }
          })}
        </>
      }
    </div>
  )
}

export default SectionTeams;