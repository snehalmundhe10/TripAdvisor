import React from 'react'
import "./AddRestaurant.css"

const AddRestaurant = () => {
    return (
        <div className="mb-3">
            <form action="">
                <div className="row g-3">
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="name" />
                    </div>
                    <div className="col-auto">
                        <input className="form-control" type="text" placeholder="location"/>
                    </div>
                    <div className="col-auto">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled> Price </option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select> 
                    </div>
                    <button className="btn btn-primary">Add</button>
                </div>   
            </form>
        </div>
    )
}

export default AddRestaurant
