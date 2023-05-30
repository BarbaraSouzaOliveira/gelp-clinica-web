import * as React from 'react';

import './index.css'

import Grid from '../../Componentes/Grid'

export default function Complexity(){
  return(
    <div className='complexityTable'>
      <Grid
      contentTable="Complexidade"
      nameTable="Nível de Complexidade"
      itemTable={[{name:'Bruna'}, {name:'Barbara'},{name:'Scooby'}]}
      />
    </div>
  )
}