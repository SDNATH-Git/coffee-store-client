import React, { use } from 'react';
import { AuthContexts } from '../Contexts/AuthContexts';
import { data } from 'react-router';
import Swal from 'sweetalert2';

const SingUp = () => {

    const { createUser } = use(AuthContexts);
    console.log(createUser);

    const handleSingup = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());


        // const email = formData.get('email');
        // const password = formData.get('password');
        // console.log(password, email, userprofile);

        // create user firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const userprofile = {
                    email,
                    ...rest,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime,

                }

                // Save profile info in db
                fetch("https://coffees-store-server-eight.vercel.app/users", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userprofile),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-ends",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div className="hero bg-base-200 min-h-screen p-3">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto ">
                <h1 className="text-4xl font-bold p-5 text-center">Sing up now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSingup} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="You name" />
                        <label className="label">Address</label>
                        <input type="text" className="input" name='address' placeholder="address" />
                        <label className="label">Phone Number</label>
                        <input type="text" className="input" name='phone' placeholder="Phone number" />
                        <label className="label">Photo Url</label>
                        <input type="text" className="input" name='photo' placeholder="Photo url" />
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SingUp;