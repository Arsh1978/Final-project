import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function AddCard({ title }) {
  return (
    <Card className=' mt-3 p-1 border border-dark border-2'>
      <CardContent>
        {title}
      </CardContent>
    </Card>
  );
}

export default AddCard;
