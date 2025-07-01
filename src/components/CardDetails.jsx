import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const CardDetails = () => {

    const coffees = useLoaderData();
    const { id } = useParams();
    const coffee = coffees.find(coffee => coffee._id === id);
    if (!coffee) {
        return <p>Coffee not a valid</p>
    }
    const { _id, name, Photo, Chef, Price, Details, Supplier, Taste } = coffee;

    return (
        <div className='max-w-10/12 mx-auto my-24'>

            <div className="flex flex-col md:flex-row  items-center md:gap-18 bg-[#F5F4F1] shadow-xs border-1 border-gray-200 p-4 md:px-30">
                <figure >
                    <img className='h-[350px]  w-[250px]' src={Photo} alt="" />
                </figure>

                <div className='space-y-2'>
                    <h1><span className='font-extrabold'>Name :</span> {name}</h1>
                    <h1><span className='font-extrabold'>Details :</span> {Details}</h1>
                    <h1><span className='font-extrabold'>Supplier :</span> {Supplier}</h1>
                    <h1><span className='font-extrabold'>Taste :</span> {Taste}</h1>
                    <h1><span className='font-extrabold'>Quantity :</span> {Chef}</h1>
                    <h1><span className='font-extrabold'>Price :</span> {Price}</h1>

                </div>
            </div>

        </div>
    );
};

export default CardDetails;