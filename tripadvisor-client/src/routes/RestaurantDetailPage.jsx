import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import AddReview from '../components/AddReview';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
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
             <Header/>
           {selectedRestaurant && (
            <>
                <h4 className="text-center display-8">{selectedRestaurant.restaurant.name}</h4>
                <div className="text-center">
                    <StarRating rating={selectedRestaurant.restaurant.average_rating}/>
                    <span className="text-dark ml-1" style={{marginLeft: "5px"}}>
                        {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
                    </span>
                </div>
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
