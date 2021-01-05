import React, { useEffect, useContext} from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';
import {useHistory} from "react-router-dom";
import "./RestaurantList.css";


const RestaurantList = (props) => {
  const {restaurants, setRestaurants} = useContext(RestaurantsContext);
  // represents history of the browser
    let history = useHistory();
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants) 
                console.log(response);
             } catch(err){}
        }
       fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }));
            console.log(response);

        }catch(err){ console.log(err); }

    };
    const handleUpdate = async (id) => {
        history.push(`/restaurants/${id}/update`);
       
    }
    return (
        <div className="list-group">
            <table className="table table-hover table-striped">
                <thead>
                    <tr className="bg-dark">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map((restaurant) => {
                        return (
                        <tr key={restaurant.id}>
                            <td className="align-middle">{restaurant.name}</td>
                            <td className="align-middle">{restaurant.location}</td>
                            <td className="align-middle">{"$".repeat(restaurant.price_range)}</td>
                            <td className="align-middle">reviews</td>
                            <td className="align-middle">
                                <button
                                onClick={() => handleUpdate(restaurant.id)} 
                                className="btn btn-warning"
                                >
                                    Update
                                    </button>
                            </td>
                            <td className="align-middle">
                                <button 
                                onClick={() => handleDelete(restaurant.id)}
                                className="btn btn-warning"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        );  
                    } 
                )}
                    {/* <tr>
                        <td>McDonalds</td>
                        <td>Boston</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td>
                            <button className="btn btn-warning">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
