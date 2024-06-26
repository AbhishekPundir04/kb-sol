import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='main-container'>
      <Grid container>
        <Grid xs={3} item>
          <Typography>  Hello</Typography>
        </Grid>
        <Grid xs={3} item>
          <Typography>  Hello</Typography>
        </Grid>
        <Grid xs={3} item>
          <Typography>  Hello</Typography>
        </Grid>
        <Grid xs={3} item>
          <Typography>  Hello</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer