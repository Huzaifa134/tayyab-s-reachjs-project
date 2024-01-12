import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import countryData from '../data/Country.json'; //
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { useAuth } from "../context/auth"
import { Link } from 'react-router-dom';
import signupimage from '../static/Images/signupimage.jpg'

const SignUp = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [address1, setAddress1] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password2, setPassword2] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth.user) {
            // If the user is logged in, redirect to another page (e.g., home)
            navigate('/');
        }
    }, [auth.user, navigate]);
    const handleAddClient = async (e) => {
        e.preventDefault()
        if (!firstname || !lastname || !email || !password2 || !address1 || !country || !phonenumber) {
            setErrorMessage('All fields are required.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Invalid email format.');
            return;
        }

        // Validate password length (you can add more criteria if needed)
        if (password2.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }

        setLoading(true); // Set loading to true when the form is submitted

        const cleanedPhoneNumber = phonenumber.replace(`+${country}`, '').replace(/\D/g, ''); // Remove non-digit characters

        const formdata = new FormData();
        formdata.append("firstname", firstname);
        formdata.append("lastname", lastname);
        formdata.append("email", email);
        formdata.append("address1", address1);
        formdata.append("country", country);
        formdata.append("state", state);
        formdata.append("city", city);
        formdata.append("postcode", postcode);
        formdata.append("phonenumber", phonenumber);
        formdata.append("password2", password2);
        try {
            const response = await axios.post("https://comweb-backend.onrender.com/addClient", { firstname, lastname, postcode, email, password2, phonenumber: cleanedPhoneNumber, address1, country, state, city });
            if (isMounted) {
                setResponseMessage(response.data);
                navigate('/login');
            }
        } catch (error) {
            setErrorMessage('An error occurred during the signup process.');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        let isMounted = true;

        if (auth.user) {
            // If the user is logged in, redirect to another page (e.g., home)
            navigate('/');
        }

        return () => {
            // Cleanup: set isMounted to false when the component is unmounted
            isMounted = false;
        };
    }, [auth.user, navigate]);
    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50">
                <Link to={'/contact-us'} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-blue-500 btn-contact text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                    <span className="text-lg mr-2">🗨️</span>
                    Contact
                </Link>
            </div>
            {/* component */}
            <div className="bg-gray-200 w-full h-full flex justify-center items-center ">
                {/* Left: Image */}
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src={signupimage} alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                {/* Right: Login Form */}
                <>
                    <div className="lg:p-8 md:p-4 p-2 w-full h-full lg:w-1/2 mt-10">
                        <h1 className="text-2xl font-semibold mb-4 text-center">Signup</h1>
                        <form className="flex flex-wrap" onSubmit={handleAddClient}>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">First Name</label>
                                <input type="text" placeholder='Enter Your First Name' name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">Last Name</label>
                                <input type="text" placeholder='Enter Your Last Name' name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">Email</label>
                                <input type="email" placeholder='Enter Your Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">Password</label>
                                <input type="password" placeholder='Enter Your Password' name="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">Address</label>
                                <input type="text" placeholder='Enter Your Address' name="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">City Name</label>
                                <input type="text" placeholder='Enter Your City Name' name="city" value={city} onChange={(e) => setCity(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">State</label>
                                <input type="text" placeholder='Enter Your State Name' name="state" value={state} onChange={(e) => setState(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">Postal Code</label>
                                <input type="text" placeholder='Enter Your Postal Code Name' name='postcode' value={postcode} onChange={(e) => setPostcode(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                            </div>
                            <div className="mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">Country</label>
                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="" disabled>Select your country</option>
                                    {Object.entries(countryData).map(([code, name]) => (
                                        <option key={code} value={code}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className=" mb-2 w-full md:w-1/2 lg:w-1/2">
                                <label className="block text-gray-600">Phone Number</label>
                                <PhoneInput
                                    defaultCountry={country}  // Set the default country based on your state
                                    value={phonenumber}
                                    onChange={(value) => setPhonenumber(value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                    autoComplete="off"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-4"
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Create An Account'}
                            </button>

                        </form>
                    </div>
                </>
            </div>
        </div>
    )
}
export default SignUp