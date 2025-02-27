import React, {useState,useContext, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import Header from './Header';
import "./UpdateRestaurant.css";

const UpdateRestaurant = (props) => {
    const { id }  = useParams();
    let history = useHistory();
    const { restaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");
    
    useEffect(() => {
        const fetchData = async () =>{
            const response = await RestaurantFinder.get(`/${id}`);
            console.log(response.data.data);
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        };
        fetchData();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant =  await RestaurantFinder.put(`/${id}`,{
            name: name,
            location: location,
            price_range: priceRange
        });
        console.log(updatedRestaurant);
       history.push("/");

    }
    return (
        <div className="container">
              <h5 className="text-center">Update Restaurant</h5>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name"> Name : </label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name" 
                    className="form-control" 
                    type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location"> Location : </label>
                    <input 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    id="location" 
                    className="form-control" 
                    type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price_range"> Price Range : </label>
                    <input 
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    id="price_range" 
                    className="form-control" 
                    type="number"
                    />
                </div>
                <button 
                    onClick={handleSubmit}
                    type="submit" 
                    className="btn btn-success"
                >
                Edit
                </button>
            </form>
        </div>
    )
}

export default UpdateRestaurant
