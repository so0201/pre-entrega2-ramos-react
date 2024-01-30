import { useEffect, useState } from "react";
import { pedirDatos } from "./pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        setLoading(true);
        pedirDatos()
            .then((res) => {
                if (category) {
                    setProductos(res.filter((producto) => producto.category === category));
                } else {
                    setProductos(res);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); 
            });
    }, [category]);

    return (
        <>
        <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
