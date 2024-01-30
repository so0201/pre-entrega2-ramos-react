import { useEffect, useState } from "react"
import { pedirDatos } from "./pedirDatos"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
      pedirDatos()
        .then((res) => {
            setProductos(res);
        })
    }, [])
    
  return (
    <>
        <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer