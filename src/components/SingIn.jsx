import React, { use } from 'react';
import { AuthContexts } from '../Contexts/AuthContexts';
import { data } from 'react-router';

const SingIn = () => {

    const { singInUser } = use(AuthContexts);

    const handleSingIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // SingIn firebase
        singInUser(email, password)
            .then(result => {
                console.log(result.user);

                const singInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime

                }
                // update lastSigInTime with db
                fetch("https://coffees-store-server-eight.vercel.app/users", {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(singInInfo),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })

            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen p-3">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto ">
                <h1 className="text-4xl font-bold p-5 text-center">Sing In now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSingIn} className="fieldset">
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

export default SingIn;