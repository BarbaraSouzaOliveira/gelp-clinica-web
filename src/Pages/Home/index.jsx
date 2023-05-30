import * as React from 'react';
import './index.css';
import  Grid from '../../Componentes/Grid'

export default function Home() {
  return (
    <div>
      <Grid 
      contentTable="Paciente"
      nameTable="Tabela Paciente"
      itemTable={[{name:'Bruna'}, {name:'Barbara'},{name:'Scooby'}]}
      />
    </div>
  );
}