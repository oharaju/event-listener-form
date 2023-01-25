import { useState } from 'react';
import './App.css';
import CardForm from './components/CardForm'

function App() {

const [colaboradores, setColaboradores] = useState([]);

const submeterColaborador = (colaborador) => {
  setColaboradores([... colaboradores, colaborador])
  console.log(colaborador)
}

  return (
    <div className="App">
      <CardForm colaboradorCadastrado={colaborador => submeterColaborador(colaborador)}  />
    </div>
  );
}

export default App;
