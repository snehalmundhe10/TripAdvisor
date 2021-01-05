import React, {useState, createContext} from "react";


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    // passing/storing data in our context using useState hook
    const [restaurants, setRestaurants] = useState([]);
    const addRestaurants = (restaurant) =>{
        setRestaurants([...restaurants, restaurant]);
    }; 
    return(
        //  so we are passing the value of restaurants to every component by context api
            <RestaurantsContext.Provider 
                value={{ restaurants, setRestaurants, addRestaurants}}>
                {props.children}
            </RestaurantsContext.Provider>
        )

}