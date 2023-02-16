import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import SectionTeams from './components/SectionTeams'

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const submeterColaborador = (colaborador) => {
    setColaboradores([... colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Form colaboradorCadastrado={colaborador => submeterColaborador
      (colaborador)} />
      <SectionTeams colaboradores={colaboradores} />
    </div>
  );
}

export default App;
