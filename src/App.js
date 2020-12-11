import React from 'react'
import Header from './Components/Header'
import './App.css';
import DataIp from './Components/DataIp';
import DisplayMap from './Components/DisplayMap';
import Footer from './Components/Footer';
import {AppContextProvider} from './context/AppContext'


function App() {
  return (
    <AppContextProvider>
      <Header/>
      <DataIp/>
      <DisplayMap/>
      <Footer/>
    </AppContextProvider>
  );
}

export default App;
