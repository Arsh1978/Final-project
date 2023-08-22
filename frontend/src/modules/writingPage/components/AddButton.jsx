import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CardComponent from './NotesList';

function AddButton({ onCardAdded, onCardDeleted, disableDelete }) {
  const handleAddCard = () => {
    const newCard = <CardComponent key={Date.now()} />;
    onCardAdded(newCard);
  };

  const handleDeleteCard = () => {
    onCardDeleted();
  };

  return (
    <>
        
      <Button className='m-1' variant="contained" onClick={handleAddCard}>
        <AddIcon />
      </Button>
      <Button className='m-1' variant="contained" color="error" onClick={handleDeleteCard} disabled={disableDelete}>
      <DeleteIcon />
      </Button>
    </>
  );
}

export default AddButton;
