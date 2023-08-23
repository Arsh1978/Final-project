import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { Search_box } from '../../modules/writingPage/components/Search';
import AddButton from '../../modules/writingPage/components/AddButton';

import Grid from '@mui/material/Grid';
import AddCard from '../../modules/writingPage/components/NotesList';

import apiclient from '../services/api-client';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
});

// ... other imports

function Header() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleCardAdded = (newCard) => {
    setCards([...cards, newCard]);
    setFilteredCards([...filteredCards, newCard]);
  };
  

  const handleCardDeleted = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
    setFilteredCards(newCards);
  };

  let storedTitles = [];
  const handleTitleSearch = (data) => {

    console.log(data);
    const storedTitles = data.data.records.map(record => record.title)
    // const filtered = cards.filter((card) => {
    //   const content = card.props.title;
    //   if (content && typeof content === 'string') {
    //     return content.toLowerCase().includes(query.toLowerCase());
    //   }
    //   return false;
    // });
    console.log(storedTitles);
    setFilteredCards(storedTitles);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static" className='border border-dark border-1'>
      <Toolbar className='p-1'>
          <Search_box onTitleSearch={handleTitleSearch} />
          <AddButton
            onCardAdded={handleCardAdded}
            onCardDeleted={handleCardDeleted}
            disableDelete={cards.length === 0}
          />
        </Toolbar>
      </StyledAppBar>
      <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
        <Grid container spacing={2}>
          {filteredCards.map((title, index) => (
            <Grid item xs={12} key={index}>
              <AddCard title={title} onDelete={() => handleCardDeleted(index)} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}

export default Header;
