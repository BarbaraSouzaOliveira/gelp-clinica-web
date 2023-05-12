import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 600,
    margin: '0 auto',
    marginTop: 20,
  },
  tableHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#4de7c1',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#3cc1a3',
    },
  },
});

const Grid = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <div className={classes.tableHeader}>
        <h2>Minha Grid</h2>
        <Button className={classes.createButton} variant="contained">
          Criar novo item
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tabela Nome</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Item 1</TableCell>
            <TableCell align="right">
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grid;
