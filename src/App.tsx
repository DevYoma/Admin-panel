import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
// data for the admin dashboard form inputs
import { userInputs, productInputs } from './utils/FormSource';
import './styles/dark.scss';
import { AppContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import RequireAuth from './components/RequireAuth';

function App() {
  const context = useContext(AppContext);

  const {darkMode, light, dark} = context;
  // console.log(darkMode);

  const authContext = useContext(AuthContext);
  const {currentUser } = authContext;

  // console.log(currentUser);

  // const RequireAuth = ({ children}: any) => {
  //   return currentUser ? children : <Navigate to={'/login'}/>
  // }
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path='/'>
          <Route path='/login' element={<Login />}/>
          <Route index element={
            <RequireAuth>
              <Home />
            </RequireAuth>} 
          />
            <Route path='users'>
              <Route index element={
              <RequireAuth>
                <List />
              </RequireAuth>} />
              <Route path=':userId' element={
                <RequireAuth>
                  <Single />
                </RequireAuth>} 
              />
              
              <Route path='new' element={ 
                <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                </RequireAuth>} />
            </Route>

            <Route path='products'>
              <Route index element={
                  <RequireAuth>
                    <List />
                </RequireAuth>}
               />
              <Route path=':productId' element={
                  <RequireAuth>
                     <Single />
                 </RequireAuth>}
              />
              {/* <New inputs={productInputs} title="Add New Product" /> */}
              <Route path='new' element={
                      <RequireAuth>
                        <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
              }/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
