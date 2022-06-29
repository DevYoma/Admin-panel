import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box } from '@mui/system';
import { createTheme, PaletteMode, Stack, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add'

function App() {
  const [mode, setMode] = useState<PaletteMode>("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="app" bgcolor={"background.default"} color={"text.primary"}>
        {/* navbar */}
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
          <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
