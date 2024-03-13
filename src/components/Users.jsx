import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fakerapi.it/api/v1/users?_quantity=6&_gender=male&_locale=es_ES');
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
            <p className="h2">FakeApi Users</p>
        </div>
        <div className="row">
            {data.map((user, index) => (
                <div className="col-4 mt-3" key={index}>
                    <div className="card" style={{ width:"18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{`${user.firstname} ${user.lastname}`}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
                            <p className="card-text">{`username: ${user.username}`}</p>
                            <p className="card-text">{`mac address: ${user.macAddress}`}</p>
                            <a href={user.website} className="btn btn-primary">website</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="row justify-content-md-end mt-3">
            <div className="col-3">
                <Link className="btn btn-outline-info" to="/productos">visita productos</Link>
            </div>
        </div>
       </div>
    )
}

export default Users