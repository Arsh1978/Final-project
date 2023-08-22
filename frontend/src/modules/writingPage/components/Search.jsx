import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


export const Search_box = ({ onSearch, onTitleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
  };


  const handleTitleSearch = () => {
    onTitleSearch(searchQuery);
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
