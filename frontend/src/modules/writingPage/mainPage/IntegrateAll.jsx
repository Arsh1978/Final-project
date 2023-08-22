import React from 'react'
import Grid from '@mui/material/Grid'
import { GridOne } from '../grid_page/GridOne'
import { GridTwo } from '../grid_page/GridTwo'

export const MainPage = () => {
  return (
    <>
    <Grid container spacing={0}>
      <GridOne/>
      <GridTwo/>
    </Grid>
</>
  )
}