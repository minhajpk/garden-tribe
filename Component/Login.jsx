import React, { use } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { logIn, signInWithGoogle } = use(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                 Navigate(location?.state || '/')
                e.target.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Account Login Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Account Login Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div>

            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-[#006838]">Login now!</h1>
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn  bg-[#006838] text-white mt-4">Login</button>
                            <p className='text-center font-bold text-gray-500'>Don't You Have an Account ? Please <Link to='/sign-up' className='underline text-blue-600'>SignUp</Link> </p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn mb-2 bg-white text-[#006023] border-[#006023] hover:bg-[#006023] hover:text-white">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;