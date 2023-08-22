import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useRef } from 'react';
import apiclient from '../../../shared/services/api-client';

import "../components/css/notes.css"; // Apply Apple Notes styling here

export const GridTwo = () => {
  const [titl, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };


  const title = useRef();
  const description = useRef();

  const handlePost = async () => {
    const noteObject = {
        'title': title.current.value,
        'description' : description.current.value
    }
    console.log('Note Object is ', noteObject);
    const response = await apiclient.post('http://localhost:1234/submitnote', noteObject);
    console.log('Response is ', response);
    
  }

  return (
    <Grid alignItems={'center'} justifyContent={'center'} item xs={9}>
      <Container>
        <div className="apple-notes-form">
          <TextField
            className="apple-notes-title"
            value={titl}
            inputRef = {title}
            onChange={handleTitleChange}
            label="Title"
            variant="outlined"
          />
          <TextareaAutosize
            className="apple-notes-content"
            value={content}
            ref = {description}
            onChange={handleContentChange}
            placeholder="Enter Text Here"
            rowsMin={10} // Increase the number of rows to make the text area larger
            cols={50} // Increase the number of columns to make the text area wider
          />
          <div className="apple-notes-buttons">
            {/* <Button
              className="apple-notes-save-button"
              onClick={handlePost}
              
              variant="outlined"
              color="primary"
            >
              Save Title
            </Button> */}
            <Button
              className="apple-notes-submit-button"
              onClick={handlePost}
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