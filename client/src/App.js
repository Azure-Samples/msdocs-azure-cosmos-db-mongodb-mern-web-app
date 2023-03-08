import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import List from './components/list';
import Add from './components/add';

const App = () => (
    <main>
        <Navbar />
        <main className="container mt-4 mb-2">
            <Routes>
                <Route exact path="/" element={<List />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </main>
    </main>
);

export default App;