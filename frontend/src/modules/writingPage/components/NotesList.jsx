import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function AddCard({ title }) {
  return (
    <Card>
      <CardContent>
        {title}
      </CardContent>
    </Card>
  );
}

export default AddCard;
