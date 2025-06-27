<<<<<<< HEAD
import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h1>SignUp now</h1>
=======
import React, { useState, use } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/AuthContext';

const SignUp = () => {
    const { createUser, verificationEmail, updateUserProfile, signInWithGoogle } = use(AuthContext);
    const [error, setError] = useState('');

    

    const validatePassword = (password) => {
        const minLength = /.{8,}/;
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const number = /[0-9]/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        return (
            minLength.test(password) &&
            uppercase.test(password) &&
            lowercase.test(password) &&
            number.test(password) &&
            specialChar.test(password)
        );
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
            return;
        }

        setError('');
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
                    verificationEmail().then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your account has been created successfully. Please verify your email!",
                            showConfirmButton: true,
                        });
                    });
                });

                e.target.reset();
            })
            .catch((error) => {
                setError(error.message);
            });
    };
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
        <div className="hero min-h-screen mt-10 p-4 mb-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold text-[#006838]">SignUp now!</h1>
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" required />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />
                        <label className="label">Photo URL</label>
                        <input type="text" name="photo" className="input" placeholder="Photo URL" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-[#006838] text-white mt-4">SignUp</button>
                        <p className="text-center font-bold text-gray-500 mt-2">
                            Already Have an Account? <Link to="/login" className="underline text-blue-600">Login</Link>
                        </p>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className="btn mb-2 bg-white text-[#006023] border-[#006023] hover:bg-[#006023] hover:text-white">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff" />
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                            </g>
                        </svg>
                        Continue with Google
                    </button>
                </div>
            </div>
>>>>>>> a010a26 (marquee add)
        </div>
    );
};

export default SignUp;

