import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useAdminStore } from '../../store/adminStore';
import { AdminLoginForm } from './AdminLoginForm';
import { AddArcanaModal } from './AddArcanaModal';

export const AdminPanel = () => {
  const { isLoggedIn, logout, openModal, setOpenModal } = useAdminStore();

  if (!isLoggedIn) {
    return <AdminLoginForm />;
  }

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={2} marginTop={"150px"}>
        <Typography variant="h4">Admin Panel</Typography>
        <Button variant="outlined" onClick={logout}>Logout</Button>
      </Box>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        Add Arcana
      </Button>
      <AddArcanaModal open={openModal} handleClose={() => setOpenModal(false)} />
    </Container>
  );
};
