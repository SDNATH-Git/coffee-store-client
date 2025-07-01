import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const intialcoffees = useLoaderData();
    const [coffees, setCoffees] = useState(intialcoffees);

    return (
        <div>

            <div className='max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-24'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} ></CoffeeCard>)
                }
            </div>

        </div>
    );
};

export default Home;