import React from 'react';
import {
Dialog,
DialogTitle,
DialogContent,
Typography,
TextField,
Button,
Box,
} from '@mui/material';
import { Arcana } from '../Card/ArcanaCard'; // або окремий файл типів
import { useCartStore } from '../../store/useCartStore';

interface ArcanaModalProps {
open: boolean;
onClose: () => void;
arcana: Arcana;
}

export const ArcanaModal: React.FC<ArcanaModalProps> = ({ open, onClose, arcana }) => {
const addToCart = useCartStore((state) => state.addToCart);

const handleOrder = () => {
addToCart(arcana);
onClose();
};

return (
<Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
<DialogTitle>{arcana.title}</DialogTitle>
<DialogContent>
<Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} mt={2}>
{/* Left side: Arcana info */}
<Box flex={1}>
<img
src={arcana.image}
alt={arcana.title}
style={{ width: '100%', borderRadius: 8 }}
/>
<Typography variant="body1" mt={2}>
{arcana.description}
</Typography>
<Typography variant="h6" color="primary" mt={1}>
Ціна: {arcana.price} грн
</Typography>
</Box>

      {/* Right side: Order form */}
      <Box flex={1}>
        <Typography variant="h6" gutterBottom>
          Заповніть форму замовлення:
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField label="Ваше ім’я" fullWidth required />
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Телефон" fullWidth required />
          <TextField label="Адреса доставки" fullWidth required />
          <Button variant="contained" color="primary" onClick={handleOrder}>
            Замовити
          </Button>
        </Box>
      </Box>
    </Box>
  </DialogContent>
</Dialog>

);
};