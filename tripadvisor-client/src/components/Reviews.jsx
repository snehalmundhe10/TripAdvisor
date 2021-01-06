import React from 'react';
import StarRating from './StarRating';
import "./Reviews.css";
import Header from './Header';

const Reviews = ({reviews}) => {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
                { reviews.map((review) => {
                   return (
                   <>
                   <div className="col">
                    <div
                    key={review.id} 
                    className="card text-black bg-light"
                    >
                        <div className="card-header d-flex justify-content-between">
                            <span>{review.name}</span>
                            <span className="star"><StarRating rating={review.rating}/></span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{review.review}</p>
                        </div>
                    </div>
                    </div>  
                 </>   
                ); 
            })}
        </div>
        </>
    )
}

export default Reviews
