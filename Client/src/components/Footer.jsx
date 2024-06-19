import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-200 bg-gray-900 body-font mt-3" >
            <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-normal text-gray-300">Counterfeit Drugs</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Made for eleminating fake drugs.
                </p>
            </div>
        </footer >
    )
}

export default Footer