import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, Photo, Chef, Price, Details, Supplier, Taste } = useLoaderData();

    const handleUpdatecoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries());
        console.log(coffeeData);

        // update sever data 
        fetch(`https://coffees-store-server-eight.vercel.app/coffees/${_id}`,
            {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(coffeeData),
            })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    console.log("Coffee added successfully")
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your successfully updated coffee",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

    }


    return (
        <div className=' '>

            <div className='px-4 md:px-36 py-8 md:py-12 bg-gray-200 m-5 md:m-20 '>
                <div className=' md:py-14 text-center space-y-4'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Update Coffee</h1>
                    <p className='text-xs md:text-xl'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdatecoffee} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" name='name' defaultValue={name} placeholder="Enter a coffee name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Chef</legend>
                            <input type="text" className="input w-full" name='Chef' defaultValue={Chef} placeholder="Enter a coffee chef" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Supplier</legend>
                            <input type="text" className="input w-full" name='Supplier' defaultValue={Supplier} placeholder="Enter a coffee Supplier" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Taste</legend>
                            <input type="text" className="input w-full" name='Taste' defaultValue={Taste} placeholder="Enter a coffee Taste" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Price</legend>
                            <input type="text" className="input w-full" name='Price' defaultValue={Price} placeholder="Enter a coffee Price" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Details</legend>
                            <input type="text" className="input w-full" name='Details' defaultValue={Details} placeholder="Enter a coffee Category" />
                        </fieldset>
                    </div>

                    <fieldset className="fieldset my-3">
                        <legend className="fieldset-legend">Photo</legend>
                        <input type="text" className="input w-full" name='Photo' defaultValue={Photo} placeholder="Enter a Photo URL" />
                    </fieldset>
                    <input className='btn w-full my-4 bg-[#D2B48C]' type="submit" value="Update Coffee" />
                </form>
            </div>

        </div>
    );
};

export default UpdateCoffee;