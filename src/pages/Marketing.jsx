import React from 'react'
import marketingphoto from '../static/Images/marketingphoto.jpg'
import BreadCrumbs1 from '../components/bcrumbsSection/BreadCrumbs1'
import SmallCards from '../components/SmallCards'
import { Link } from 'react-router-dom'

const Marketing = () => {

    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50">
                <Link to={'/contact-us'} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-blue-500 btn-contact text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                    <span className="text-lg mr-2">🗨️</span>
                    Contact
                </Link>
            </div>
            <img src={marketingphoto} alt="Placeholder Image" className="object-cover w-full h-full" />
            <BreadCrumbs1 />
            <div className='flex flex-wrap	 justify-center gap-6 p-4 m-2'>
                <SmallCards />
                <SmallCards />
                <SmallCards />
            </div>

        </div>
    )
}

export default Marketing