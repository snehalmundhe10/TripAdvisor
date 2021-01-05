import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header__logo">
                <img 
                src="https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png"
                alt="tripadvisor"
                />
                 <h3 className="font-weight-light display-7 text-left">
                    TripAdvisor
                 </h3>
            </div>
            <br/><br/>
            <h3 className="font-weight-light display-9 text-center">
                Restaurants in Boston
            </h3>
        </div>
    )
}

export default Header
