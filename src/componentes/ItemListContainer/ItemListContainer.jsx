import { useEffect, useState } from "react";
import { pedirDatos } from "./pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { category } = useParams()

    useEffect(() => {
        const asyncFunc = category ? pedirDatos : pedirDatos

        asyncFunc(category)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    })

    return (
        <>
        <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
