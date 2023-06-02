import * as React from 'react';
import './index.css';
import  Grid from '../../Componentes/Grid'

export default function Home() {
  return (
    <div>
      <Grid
      contentTable="Home"
      nameTable="Tabela Home"
      itemTable={[{name:'Bruna'}, {name:'Barbara'},{name:'Scooby'}]}
      />
    </div>
  );
}