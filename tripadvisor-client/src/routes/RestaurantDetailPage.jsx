import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
    const {id} = useParams();
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await RestaurantFinder.get(`/${id}`);
            setSelectedRestaurant(response.data.data);
            }catch(err){ console.log(err); }    
        }
        fetchData();  
    }, []);
    return (
        <div>
           {selectedRestaurant && (
            <>
                <h3 className="text-center display-6">{selectedRestaurant.restaurant.name}</h3>
                <div className="mt-3">
                    <Reviews reviews={selectedRestaurant.reviews}/> 
                </div>
                <AddReview />
            </>
           )}
    
        </div>
    )
}

export default RestaurantDetailPage
