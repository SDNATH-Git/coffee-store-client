import React from 'react';
import { data, Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, Photo, Chef, Price } = coffee;

    const handleDelet = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                fetch(`https://coffees-store-server-eight.vercel.app/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            //Remove the coffee
                            const remaingCoffee = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaingCoffee)
                        }
                    })


            }
        });

    }

    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xs border-1 border-gray-200 p-4 text-xs md:text-sm">
            <figure>
                <img src={Photo} alt="" />
            </figure>
            <div className="flex  justify-around  w-full items-center">
                <div className='space-y-2'>
                    <h1><span className='font-extrabold'>Name :</span> {name}</h1>
                    <h1><span className='font-extrabold'>Quantity :</span> {Chef}</h1>
                    <h1><span className='font-extrabold'>Price :</span> {Price}</h1>

                </div>
                <div >
                    <div className="join join-vertical space-y-1">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn join-item">View</button>
                        </Link>
                        <Link to={`updatecoffee/${_id}`}>
                            <button className="btn join-item ">Edit</button>
                        </Link>

                        <button onClick={() => handleDelet(_id)} className="btn join-item">x</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;