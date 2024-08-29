import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jobImage from "../assets/RecSysJob.jpg"

export default function ImgMediaCard({  designation, date}) {
  return (
    <Card sx={{
      minWidth: 275,
      marginBottom: '20px',
      backgroundColor: 'transparent', // Make card transparent
      backdropFilter: 'blur(0)', // No blur initially
      transition: '0.6s', // Smooth transition for hover effects
      '&:hover': {
        backgroundColor: 'wheat', // Slightly transparent white on hover
        backdropFilter: 'blur(10px)', // Blur effect on hover
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Box shadow on hover
      },
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={jobImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        { designation}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
