import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import "../components/css/notes.css"; // Apply Apple Notes styling here

export const GridTwo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSaveClick = () => {
    console.log("Title saved:", title);
  };

  const handleSubmitClick = () => {
    console.log("Content submitted:", content);
  };

  return (
    <Grid alignItems={'center'} justifyContent={'center'} item xs={9}>
      <Container>
        <div className="apple-notes-form">
          <TextField
            className="apple-notes-title"
            value={title}
            onChange={handleTitleChange}
            label="Title"
            variant="outlined"
          />
          <TextareaAutosize
            className="apple-notes-content"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter Text Here"
            rowsMin={10} // Increase the number of rows to make the text area larger
            cols={50} // Increase the number of columns to make the text area wider
          />
          <div className="apple-notes-buttons">
            <Button
              className="apple-notes-save-button"
              onClick={handleSaveClick}
              variant="outlined"
              color="primary"
            >
              Save Title
            </Button>
            <Button
              className="apple-notes-submit-button"
              onClick={handleSubmitClick}
              variant="contained"
              color="primary"
            >
              Submit Content
            </Button>
          </div>
        </div>
      </Container>
    </Grid>
  );
};