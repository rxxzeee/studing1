import React, { useState } from 'react';
import {
Modal,
Box,
TextField,
Typography,
Button,
Paper,
} from '@mui/material';
import { Arcana, useArcanasStore } from '../../store/arcanasStore';

interface Props {
open: boolean;
handleClose: () => void;
}

export const AddArcanaModal: React.FC<Props> = ({ open, handleClose }) => {
const addArcana = useArcanasStore((state) => state.addArcana);

const [arcana, setArcana] = useState<Arcana>({
id: Date.now(),
title: '',
description: '',
price: 0,
image: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;
setArcana((prev) => ({
...prev,
[name]: name === 'price' ? +value : value,
}));
};

const handleSave = () => {
addArcana(arcana);
handleClose();
};

return (
<Modal open={open} onClose={handleClose}>
<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
<Paper sx={{ padding: 4, width: 400 }}>
<Typography variant="h6" mb={2}>Add New Arcana</Typography>
<TextField fullWidth label="Title" name="title" margin="normal" value={arcana.title} onChange={handleChange} />
<TextField fullWidth label="Description" name="description" margin="normal" value={arcana.description} onChange={handleChange} />
<TextField fullWidth label="Price" name="price" type="number" margin="normal" value={arcana.price} onChange={handleChange} />
<TextField fullWidth label="Image URL" name="image" margin="normal" value={arcana.image} onChange={handleChange} />
<Button
variant="contained"
fullWidth
sx={{ mt: 2 }}
onClick={handleSave}
>
Save
</Button>
</Paper>
</Box>
</Modal>
);
};