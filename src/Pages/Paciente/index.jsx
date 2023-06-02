import * as React from 'react';
import './index.css';
import Grid from '../../Componentes/Grid'


export default function Paciente(){
    const pacientes = [
        {
            name: 'Bruna',
            numberOne: '',
            numberTwo: '',
            CPF: '',
            email: ''
        },
        {
            name: 'Barbara',
            numberOne: '',
            numberTwo: '',
            CPF: '',
            email: ''
        },
        ]


    return(
        <div>
            <Grid
              contentTable="Paciente"
              nameTable="Paciente"
              itemTable={pacientes}
              />
        </div>
    );

}
