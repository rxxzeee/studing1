// components/Cart.tsx
import React from 'react';
import { useCartStore } from '../store/useCartStore';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCartStore();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Кошик
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Кошик порожній</Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id} secondaryAction={
                <Button onClick={() => removeFromCart(item.id)} color="error">
                  Видалити
                </Button>
              }>
                <ListItemText
                  primary={item.title}
                  secondary={`Ціна: ${item.price} грн`}
                />
              </ListItem>
            ))}
          </List>
        )}
        {cartItems.length > 0 && (
          <Button onClick={clearCart} variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }}>
            Очистити кошик
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
