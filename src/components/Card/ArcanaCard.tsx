import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import { ArcanaModal } from '../Modals/ArcanaModal';

export interface Arcana {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ArcanaCardProps {
  arcana: Arcana;
}

export const ArcanaCard: React.FC<ArcanaCardProps> = ({ arcana }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 'auto', border:'1px solid gray', borderRadius:'15px', maxHeight:'500px'}}>
        <CardMedia
          component="img"
          height="200"
          image={arcana.image}
          alt={arcana.title}
        />
        <CardContent>
          <Typography variant="h6" noWrap>{arcana.title}</Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {arcana.description}
          </Typography>
          <Typography variant="h6" color="primary" mt={1}>
            {arcana.price} грн
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setOpen(true)}>
            Детальніше
          </Button>
        </CardActions>
      </Card>

      <ArcanaModal open={open} onClose={() => setOpen(false)} arcana={arcana} />
    </>
  );
};