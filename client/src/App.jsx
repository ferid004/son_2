import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.scss'
import MainLayout from './layout/mainLayout'
import Add from './pages/add'
import Basket from './pages/basket'
import Detail from './pages/detail'
import Home from './pages/home'
import Wish from './pages/wish'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HelmetProvider>

    
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>} path='/'>
            <Route element={<Home></Home>} index></Route>
            <Route element={<Add></Add>} path='add'></Route>
            <Route element={<Wish></Wish>} path='wish'></Route>
            <Route element={<Detail></Detail>} path='detail/:id'></Route>
            <Route element={<Basket></Basket>} path='basket'></Route>
          </Route>

        </Routes>
      </BrowserRouter>
            
     </HelmetProvider>
    </>
  )
}

export default App
