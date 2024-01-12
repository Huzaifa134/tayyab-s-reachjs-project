import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs2 = () => {
    return (
        <div className='mx-auto w-full max-w-screen-xl mt-2 p-2 py-6 lg:py-2'>
            <nav className="flex breadcrumbs xl:ml-24 md:ml-20 breadcrumbs-margin-small" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 " >
                    <li className="inline-flex items-center ">
                        <Link to={"/"} className="inline-flex breadcrumbs-p  items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                            </svg>
                            <Link to={"/domain"} className="ml-1 text-sm font-medium breadcrumbs-p text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Domain</Link>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumbs2