import * as React from 'react';
import './index.css';
import  Grid from '../../Componentes/Grid'

export default function Specialty() {
  return (
    <div>
      <Grid
      contentTable="Especialidade"
      nameTable="Tabela Especialidade"
      itemTable={[{name:'Ortopedia'}, {name:'Pediatria'},{name:'Cardiologia'}]}
      />
    </div>
  );
}