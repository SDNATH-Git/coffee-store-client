import React, { useState } from 'react';
import { data, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const users = () => {
    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffees-store-server-eight.vercel.app/users/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            }
        });
    }

    return (
        <div>
            <h1>User : {users.length} </h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id} >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.phone}</td>
                                <th className='space-x-2 space-y-2 md:space-y-0'>
                                    <button className="btn btn-ghost bg-gray-300 btn-xs">V</button>
                                    <button className="btn btn-ghost bg-gray-300 btn-xs">E</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost bg-gray-300 btn-xs">X</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default users;