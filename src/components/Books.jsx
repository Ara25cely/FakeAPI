import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Books = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=6&_locale=es_ES');
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
            <p className="h2">FakeApi Libros</p>
        </div>
        <div className="row">
            {data.map((book, index) => (
                <div className="col-4 mt-3" key={index}>
                    <div className="card" style={{ width:"18rem" }}>
                        <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{book.author}</h6>
                        <p className="card-text">{book.description}</p>
                        <p className="card-text">{book.genre}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="row justify-content-md-end mt-3">
            <div className="col-3">
                <Link className="btn btn-outline-info" to="/usuarios">visita usuarios</Link>
            </div>
        </div>
       </div>
    )
}

export default Books