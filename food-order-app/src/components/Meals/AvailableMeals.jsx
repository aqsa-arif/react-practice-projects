import React, { useEffect, useState } from 'react'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import useHttp from '../hooks/use-http';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const { isLoading, httpError, sendRequest } = useHttp();

    const transformedMeals = (data) => {
        let loadedMeals = [];

        for (const key in data) {
            loadedMeals.push({
                id: key,
                name: data[key].name,
                description: data[key].description,
                price: data[key].price,
            })
        }
        setMeals(loadedMeals); 
    }

    useEffect(() => { 
        sendRequest({url: 'https://custom-food-order-default-rtdb.firebaseio.com/meals.json'})
        .then(data => { 
            transformedMeals(data);
        })
        .catch(error =>  console.log(error));
    }, []); 


    if(isLoading){ 
        return <section>
             <p className={classes.MealsLoading}>Loading...</p>
        </section> 
    }

    if(httpError){
        return <section>
            <p className={classes.MealsError}>Failed to Fetch Meals.</p>
        </section> 
    }  
    
    if(!meals.length){
        return <section>
            <p className={classes.Mealsnotfound}>No meals found</p>
        </section>
    }

    const mealsList = meals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />
    })


    return (
        <section className={classes.meals}>
            <Card>
                <ul> 
                    {mealsList}
                </ul>
            </Card>
        </section >
    )
}

export default AvailableMeals
