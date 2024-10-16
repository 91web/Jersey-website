import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Products } from '../../../datastat/staticData';  // Adjust the path as needed

export default function Product() {
  // Fallback for Products in case it is undefined
  if (!Products || !Array.isArray(Products)) {
    return <div>No products available</div>; // Display a message or loading indicator
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop:10 }}>
      {Products.map((product) => (
        <div
          key={product.id}
          style={{
            flex: '0 1 calc(25% - 16px)', // 4 in a row on desktop
            boxSizing: 'border-box',
            '@media (max-width: 768px)': {
              flex: '0 1 calc(50% - 16px)', // 2 in a row on mobile
            },
          }}
        >
          <Card sx={{ maxWidth: 300, height: '100%' }}>
            <CardMedia
              component="img"
              alt={product.title}
              sx={{
                objectFit: 'cover',
                height: 200,
                width: '100%',
              }}
              image={product.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                Price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: 'black', color: 'black' }}
              >
                More Details
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{
                  backgroundColor: 'black',
                  marginLeft: 'auto',
                  textTransform: 'none',
                }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
