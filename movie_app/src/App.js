import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
