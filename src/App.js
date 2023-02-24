import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import SectionTeams from './components/SectionTeams'
import Footer from './components/Footer';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const submeterColaborador = (colaborador) => {
    setColaboradores([... colaboradores, colaborador])
  }

  return (
    <>
    <Header />
      <div className="App">
        <Form colaboradorCadastrado={colaborador => submeterColaborador(colaborador)} />
        <SectionTeams colaboradores={colaboradores} />
      </div>
      <Footer />
    </>
  );
}

export default App;
