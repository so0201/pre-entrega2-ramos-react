import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemList from './componentes/ItemList/ItemList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './componentes/Nosotros'
import Contacto from './componentes/Contacto'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/productos/:categoria' element={<ItemListContainer/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App