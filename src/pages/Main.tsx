import React from "react";
import { Box } from "@mui/material";
import arcanas from '../data/arcanas.json';
import { ArcanaCard } from '../components/Card/ArcanaCard';

export const Main: React.FC = () => {
  return (
    <Box 
      sx={{
        maxWidth: '1440px',
        margin: '100px auto 0',
        padding: { xs: '20px', md: '40px' },
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'space-between' },
        gap: '30px',
      }}
    >
      {arcanas.map((arcana) => (
        <Box 
          key={arcana.id}
          sx={{
            width: { xs: '100%', sm: 'calc(50% - 15px)', md: 'calc(33.333% - 20px)', lg: 'calc(25% - 22.5px)' },
            maxWidth: '320px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }}
        >
          <ArcanaCard arcana={arcana} />
        </Box>
      ))}
    </Box>
  );
};