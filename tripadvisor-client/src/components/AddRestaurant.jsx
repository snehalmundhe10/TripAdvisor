import React, {useState, useContext} from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';
import "./AddRestaurant.css";

const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response =  await RestaurantFinder.post("/", {
                name: name,
                location: location,
                price_range: priceRange
            });
            addRestaurants(response.data.data.restaurant);
            console.log(response);

        }catch(err){
            
        }
    }
    return (
        <div className="mb-3">
            <form action="">
                <div className="row g-3">
                    <div className="col-auto">
                        <input
                         value={name}
                         onChange={ (e) => setName(e.target.value)}
                         type="text" 
                         className="form-control" 
                         placeholder="name" />
                    </div>
                    <div className="col-auto">
                        <input 
                        value={location}
                        onChange={ (e) => setLocation(e.target.value)}
                        className="form-control" 
                        type="text" 
                        placeholder="location"/>
                    </div>
                    <div className="col-auto">
                        <select 
                        value={priceRange}
                        onChange={ (e) => setPriceRange(e.target.value)}
                        className="custom-select my-1 mr-sm-2"
                        >
                            <option disabled> Price </option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select> 
                    </div>
                    <button 
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary">
                        Add
                    </button>
                </div>   
            </form>
        </div>
    )
}

export default AddRestaurant
