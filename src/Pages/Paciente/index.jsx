import * as React from 'react';
import './index.css';
import Grid from '../../Componentes/Grid'


export default function Paciente(){
    return(
        <div>
            <Grid
              contentTable="Paciente"
              nameTable="Paciente"
              itemTable={[{name:'Nome'}, {Number:'Celular1'},{Number:'Celular2'},{String:"CPF"},{String:"Email"}]}
              />
        </div>
    );

}