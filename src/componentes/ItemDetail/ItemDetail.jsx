import "./itemDetail.css/"

const ItemDetail = ( {item} ) => {
  return (
    <div className='container'>
        <div className='prod-detail'>
            <img src={item.image} alt={item.name} />
            <div>
                <h3 className='title'>{item.name}</h3>
                <p className='desc'>{item.description}</p>
                <p className='categoria'>Categoria: {item.category}</p>
                <p className='precio'>Precio ${item.price}</p>
            </div>

        </div>
    </div>
  )
}

export default ItemDetail