
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Header from './components/Header'
import Login from './components/Login'
import Categories from './components/Categories'




function App() {

  return (
    <BrowserRouter>
    <div className="container">


    <Header />
    <main>
    <article>
    <Routes>  
    <Route path='/' exact element={<Login/>} />
    <Route path='/login' exact element={<Login/>} />
    <Route path='/categories' exact element={<Categories/>} />



    </Routes>
    </article>
    <aside>
    </aside>
    </main>    

    </div>
    </BrowserRouter>
    );
}

export default App;
