import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header__logo">
               <a href="/"> <img 
                src="https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png"
                alt="tripadvisor"
                />
                </a>
              
                 <h3 className="font-weight-light display-7 text-left">
                    TripAdvisor
                 </h3>
                
                
                 {/* <table className="table table-light">
                     <thead>
                         <tr>
                             <th>
                                <a 
                                  href="https://www.tripadvisor.com/Tourism-g60745-Boston_Massachusetts-Vacations.html">
                                    Boston
                                </a>
                             </th>
                             <th>
                                 <a 
                                    href="https://www.tripadvisor.com/Hotels-g60745-Boston_Massachusetts-Hotels.html">
                                    Hotels
                                 </a>   
                            </th>
                             <th>
                                 <a 
                                   href="https://www.tripadvisor.com/Attractions-g60745-Activities-Boston_Massachusetts.html">
                                   Things to do
                                 </a>
                             </th>
                             <th>
                                 <a href="/">
                                   <b>Restaurants</b>
                                 </a>
                            </th>
                             <th>
                                 <a 
                                    href="https://www.tripadvisor.com/Flights-g60745-Boston_Massachusetts-Cheap_Discount_Airfares.html">
                                    Flights
                                 </a>
                             </th>
                             <th>
                                <a 
                                    href="https://www.tripadvisor.com/VacationRentals-g60745-Reviews-Boston_Massachusetts-Vacation_Rentals.html">
                                 Vacation Rentals
                                 </a> 
                             </th>
                             <th>
                                 <a href="https://www.tripadvisor.com/Attractions-g60745-Activities-c26-Boston_Massachusetts.html">
                                 Shopping
                                 </a>
                            </th>
                             <th>
                                <a 
                                  href="https://www.tripadvisor.com/RentalCars-g60745-Boston_Massachusetts.html">
                                  Rental Cars
                                 </a>  
                             </th>
                             <th></th><th></th><th></th><th></th>
                             <th></th><th></th><th></th><th></th>
                             <th></th><th></th><th></th><th></th>
                             <th></th><th></th><th></th><th></th>
                         </tr>
                     </thead>
                 </table> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="https://www.tripadvisor.com/Tourism-g60745-Boston_Massachusetts-Vacations.html">
                   Boston
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" 
                                        href="https://www.tripadvisor.com/Hotels-g60745-Boston_Massachusetts-Hotels.html">
                              Hotels
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                 href="https://www.tripadvisor.com/Attractions-g60745-Activities-c26-Boston_Massachusetts.html">
                                Shopping
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                                href="https://www.tripadvisor.com/Attractions-g60745-Activities-Boston_Massachusetts.html">
                             Things To do
                            </a>
                        </li>
                       <li className="nav-item">
                           <a className="nav-link" href="https://www.tripadvisor.com/Flights-g60745-Boston_Massachusetts-Cheap_Discount_Airfares.html">
                            Flights 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.tripadvisor.com/Vacation_Packages-g60745-Boston_Massachusetts-Vacations.html">
                                Vacation Packages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.tripadvisor.com/CruiseDestination-g153339-Canada">
                                Cruises
                            </a>
                        </li>  
                     </ul>
                   </div>
              </div>
           </nav>
       </div>
            <br/><br/>
        <div className="header__title2">
            <h4 className="font-weight-light display-9 text-center">
                    Restaurants in Boston
            </h4>
        </div>
        <div className="header__hr">
          <hr/>
            <p>Your first-hand experiences really help other travelers. Thanks!</p>
          <hr/>
       </div>
   </div>
    )
}

export default Header
