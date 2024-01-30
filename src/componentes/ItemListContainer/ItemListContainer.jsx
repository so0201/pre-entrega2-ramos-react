import { useEffect, useState } from "react";
import { pedirDatos } from "./pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (category) {
                    setProductos(res.filter((producto) => producto.category === category));
                } else {
                    setProductos(res);
                }
            })
    }, [category]);

    return (
        <>
        <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
