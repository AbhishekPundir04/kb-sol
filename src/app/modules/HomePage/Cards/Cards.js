import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({content,heading,images}) {
  return (
    <div className=''>

    <Card sx={{ maxWidth: 360,}}>
      <CardMedia
        sx={{ height: 140 }}
        image={images}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {content}
        </Typography>
      </CardContent>
     
    </Card>
    </div>

  );
}