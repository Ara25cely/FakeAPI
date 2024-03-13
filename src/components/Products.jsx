import React, {useEffect, useState} from "react";
import axios from 'axios';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fakerapi.it/api/v1/products?_quantity=9&_taxes=12&_categories_type=uuid&_locale=es_ES');
            setData(response?.data?.data);
          } catch (error) {
            console.error("api error", error)
          }
        };
    
        fetchData();
      }, []);

      console.info("data", data)
      if(data.length === 0) return null
      
    return(
       <div className="container  text-center">
        <div className="row mt-3">
            <p className="h2">FakeApi Productos</p>
        </div>
        <div className="row">
            {data.map((product, index) => (
                <div className="col-4 mt-3" key={index}>
                    <div className="card" style={{ width:"18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{`${product.name}`}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{`precio: ${product.price}`}</h6>
                            <p className="card-text">{`impuestos: ${product.taxes}`}</p>
                            <p className="card-text">{`${product.description}`}</p>
                            <p className="card-text">{`codigo: ${product.ean}`}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </div>
    )
}

export default Products