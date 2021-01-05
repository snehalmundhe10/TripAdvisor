import React, {useState, createContext} from "react";


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    // passing/storing data in our context using useState hook
    const [restaurants, setRestaurants] = useState([])    
    return(
        //  so we are passing the value of restaurants to every component by context api
            <RestaurantsContext.Provider value={{ restaurants, setRestaurants}}>
                {props.children}
            </RestaurantsContext.Provider>
        )

}