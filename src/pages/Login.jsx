import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginImage from '../static/Images/LoginImage.avif';
import { useAuth } from '../context/auth'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
    const [showClientIdField, setShowClientIdField] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        return () => {
            setMounted(false);
        };
    }, []);
    useEffect(() => {
        if (auth.user) {
            // If the user is logged in, redirect to another page (e.g., home)
            navigate('/');
        }
    }, [auth.user, navigate]);
    const handleLoginAndSsoToken = async (email, password) => {
        try {
            setLoading(true);

            const loginResponse = await axios.post("https://comweb-backend.onrender.com/api/login", { email, password });
            if (loginResponse.data) {
                setAuth({
                    ...auth,
                    user: loginResponse.data.user,
                    token: loginResponse.data.token
                });

                localStorage.setItem('auth', JSON.stringify(loginResponse.data));
                // Introduce a delay of 1 second (1000 milliseconds)
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Call the function to create the SSO token
                const ssoResponse = await axios.post(
                    'https://comweb-backend.onrender.com/createSsoToken', { client_id: loginResponse.data.user?.client_id }
                );

                setToken(ssoResponse.data.redirect_url);
                setShowClientIdField(true);

                // Open the redirected URL in a new tab
                window.location.href = ssoResponse.data.redirect_url;
            }
        } catch (error) {
            setError("Invalid email or password. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        // Call the combined function to handle login and SSO token creation
        await handleLoginAndSsoToken(email, password);
    };

    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50 ">
                <Link to={'/contact-us'} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-blue-500 btn-contact text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                    <span className="text-lg mr-2">🗨️</span>
                    Contact
                </Link>
            </div>
            {/* component */}
            <div className="bg-gray-200 flex justify-center items-center h-screen">
                {/* Left: Image */}
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src={LoginImage} alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
                    <form>
                        {/* email Input */}
                        {!auth.user && (
                            <div className="mb-4">
                                <label className="block text-gray-600">Email</label>
                                <input id="email" name="email" className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500' required value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder='Enter Your Email' type="email" />

                            </div>
                        )}
                        {/* Password Input */}
                        {!auth.user && (
                            <div className="mb-4">
                                <label className="block text-gray-600">Password</label>
                                <input id="password" name="password" className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500' required value={password} onChange={(e) => { setPassword(e.target.value); }} placeholder='Enter Your Password' type="password" />
                            </div>
                        )}
                        {/* client_id Input */}
                        {!auth.user && (
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300 ease-in-out py-2 px-4 w-full"
                                disabled={loading} // Disable the button when loading is true
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        )}
                        {error && (
                            <div className="mb-4 text-red-500">
                                {error}
                            </div>
                        )}


                    </form>
                    {/* Sign up  Link */}
                    {!auth.user && (
                        <div className="mt-6 text-blue-500 text-center">
                            <Link to={"/signup"} className="text-lg"><span className=' list-none no-underline	 text-black text-lg'>Dont Have An Account? </span><span className=' hover:underline'>Sign up Here</span></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Login