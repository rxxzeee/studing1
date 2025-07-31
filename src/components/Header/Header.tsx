import React from "react";
import { Box, Typography, Button} from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../Cart';
import { useCartStore } from '../../store/useCartStore';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const cartCount = useCartStore((state) => state.cartItems.length);
    return(
        <Box 
        display = 'flex'
        flexDirection = 'row'
        justifyContent= 'space-around'
        alignItems='center'
        sx={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            padding:'16px 32px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'rgba(0, 0, 0) '
        }}>
            <Box
                display= 'flex'
                flexDirection='row'
                justifyContent='space-between'
                width='130px'
            >
            <LocalGroceryStoreIcon onClick={() => navigate("/*")} style={{width: 'auto', height: '80px', cursor:'pointer'}}/>
            <Typography 
                variant="h4"
            >
                Arcana shop
            </Typography>
            </Box>
            <Box>
                <Button variant="outlined" onClick={() => navigate("/howitworks")} sx={{color: 'black', borderColor: 'black'}}>How it works?</Button>
                <IconButton color="inherit" onClick={() => setOpen(true)}>
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Cart open={open} onClose={() => setOpen(false)} />
            </Box>
        </Box>
    )
}