import { useState } from 'react';
import './App.css';
import Form from './components/Form'

function App() {

const [colaboradores, setColaboradores] = useState([]);

const submeterColaborador = (colaborador) => {
  setColaboradores([... colaboradores, colaborador])
  console.log(colaborador)
}

  return (
    <div className="App">
      <Form colaboradorCadastrado={colaborador => submeterColaborador(colaborador)}  />
    </div>
  );
}

export default App;
