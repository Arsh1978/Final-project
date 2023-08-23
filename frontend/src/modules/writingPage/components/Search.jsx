import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import apiclient from '../../../shared/services/api-client';


export const Search_box = ({ onSearch, onTitleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    console.log(newQuery);
  };


  const handleTitleSearch = async () => {
    // onTitleSearch(searchQuery);
    const response= await apiclient.get("http://localhost:1234/note");
    console.log(response);
    onTitleSearch(response);
  };

  return (
    <List dense>
      <ListItem>
        <ListItemIcon>
          {/* Search Box */}
          <TextField
            id="search-box"
            label="Search note"
            variant="outlined"
            className='m-2'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </ListItemIcon>
        <br />
        <ListItemText>
          {/* Search Button */}
          <Button className='m-2' variant="contained" onClick={handleTitleSearch}>
            <SearchIcon />
          </Button>
        </ListItemText>
      </ListItem>
    </List>
  );
};
