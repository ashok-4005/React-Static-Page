import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/header.jsx'
import MainComponent from './components/mainComponent.jsx'


const App = () =>(
    <>
        <Header/>
        <MainComponent/>
    </>
);

export default App
