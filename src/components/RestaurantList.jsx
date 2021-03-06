import React, {useEffect, useContext } from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantContext';

const RestaurantList = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
    const {addRestaurants} = useContext(RestaurantsContext);
    useEffect(() => {
        const fetchData = async () => {
           try {
            const response = await RestaurantFinder.get("/");
            setRestaurants(response.data.data.restaurants)
            console.log(response);
            console.log(setRestaurants)
            } catch (err) {

            } 
        }
        fetchData();
    },[])
    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                   <tr className="bg-primary">
                       <th scope="col">Restaurant</th>
                       <th scope="col">Location</th>
                       <th scope="col">Price Range</th>
                       <th scope="col">Rating</th>
                       <th scope="col">Edit</th> 
                       <th scope="col">Delete</th>
                    </tr> 
                </thead>
                <tbody>
                    {restaurants && restaurants.map((restaurant) => {
                        return(
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td><button className="btn btn-warning">Update</button></td>
                                <td><button className="btn btn-primary">Delete</button></td>
                            </tr>
                        )
                        
                    })}
                    {/* <tr>
                        <td>Macdonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-primary">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
