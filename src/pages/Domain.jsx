import React from 'react'
import domainphoto from '../static/Images/domainphoto.jpg'
import BreadCrumbs2 from '../components/bcrumbsSection/BreadCrumbs2'
import DomainSection from '../components/DomainSection'
import { Link } from 'react-router-dom'

const Domain = () => {
    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50">
                <Link to={'/contact-us'} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-blue-500 btn-contact text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                    <span className="text-lg mr-2">🗨️</span>
                    Contact
                </Link>
            </div>
            <img src={domainphoto} alt="Placeholder Image" className="object-cover w-full h-full" />
            <BreadCrumbs2 />
            <DomainSection />
        </div>
    )
}

export default Domain