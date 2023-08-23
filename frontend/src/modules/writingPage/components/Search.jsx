import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

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
    <div>
      <TextField
        id="search-box"
        label="Search note"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Button variant="contained" onClick={handleTitleSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};
