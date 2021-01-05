import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from '../components/StarRating';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
    const {id} = useParams();
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await RestaurantFinder.get(`/${id}`);
            setSelectedRestaurant(response.data.data.restaurant);
            }catch(err){ console.log(err); }    
        }
        fetchData();  
    }, []);
    return (
        <div>
           {selectedRestaurant && <StarRating rating={1.2}/>}
        {/* selectedRestaurant.name */}
    
        </div>
    )
}

export default RestaurantDetailPage
