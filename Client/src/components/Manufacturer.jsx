import React from 'react'
import CreateDrug from './CreateDrug'
import TransferOwnership from './TransferOwnership'

const Manufacturer = () => {
    return (
        <>
            <header className="bg-cyan-200 ">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900">Entity</h1>

                </div>
            </header>
            <main className="bg-cyan-100">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <CreateDrug />
                            <TransferOwnership />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Manufacturer