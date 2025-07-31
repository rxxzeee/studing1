import React from 'react';
import { Box} from '@mui/material'
import { Header } from './components/Header/Header';
import { CssBaseline } from '@mui/material'
import { Main } from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HowItWorks } from './pages/HowItWorks';
import { AdminPanel } from './components/AdminPanel/AdminPanel';

function App() {
  return (
    <Router>
    <Box sx={{bgcolor:'rgba(255, 255, 255, 0.2)'}}>
      <CssBaseline />
      <Header />
    </Box>

      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </Router>
  );
}

export default App;
