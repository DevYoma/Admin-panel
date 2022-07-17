import React, { useContext, useState } from 'react';
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
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
// data for the admin dashboard form inputs
import { userInputs, productInputs } from './utils/FormSource';
import './styles/dark.scss';
import { AppContext } from './context/darkModeContext';
// import { DarkModeContext } from './context/darkModeContext';


function App() {
  const context = useContext(AppContext);

  const {darkMode, light, dark} = context;
  console.log(darkMode);


  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />}/>
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />}/>
              <Route path='new' element={<New inputs={userInputs} title="Add New User" />}/>
            </Route>

            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />}/>
              <Route path='new' element={<New inputs={productInputs} title="Add New Product" />}/>
            </Route>
        </Route>
        
        {/* <Route path='/devyoma' element={
            <ThemeProvider theme={darkTheme}>
            <Box className="app" bgcolor={"background.default"} color={"text.primary"}>
              <Navbar />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar setMode={setMode} mode={mode}/>
                <Feed />
                <Rightbar />
              </Stack>
                <Add />
            </Box>
          </ThemeProvider>
        }/> */}
      </Routes>
    </div>
  );
}

export default App;
