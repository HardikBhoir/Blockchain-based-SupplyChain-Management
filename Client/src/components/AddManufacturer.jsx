import React, { useState } from 'react'
import { ethers } from "ethers";
import { Loading } from './Loader';
import { contractABI, contractAddress } from '../lib';

const AddManufacturer = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [manufacturer, setManufacturer] = useState({
        man_name: '',
        website: '',
        wallet_address: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        setManufacturer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const createManufacturer = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const DrugDetectionContract = new ethers.Contract(contractAddress, contractABI, signer);
                const man_record = await DrugDetectionContract.createManufacturer(
                    manufacturer.man_name,
                    manufacturer.website,
                    manufacturer.wallet_address,
                    { gasLimit: 3000000 })
                const receipt = await man_record.wait()
                const data = receipt.logs[0].data
                const [man_name, man_address] = ethers.utils.defaultAbiCoder.decode(
                    ['string', 'address'], data
                )
                console.log(man_name)
                console.log(man_address)
                setIsLoading(false)
                setManufacturer({ man_name: '', website: '', wallet_address: '' })
            } else {
                setIsLoading(false)
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        createManufacturer()
    }

    return (
        <>
            {isLoading && <Loading />}

            <div className="border-2 border-gray-200 rounded-lg h-auto bg-white">
                <div class="font-sans p-4 text-black w-full  justify-center">
                    <h3 className="text-xl p-2 mb-3 text-gray-800 font-bold">
                        Register New Entity
                    </h3>
                    
                    <div class="w-full px-4 py-2 mx-auto">
                        <form method="POST" onSubmit={handleSubmit}>
                            <label class="block mb-6">
                                <span class="text-gray-800">Entity Name</span>
                                <input
                                    type="text"
                                    name="man_name"
                                    value={manufacturer.man_name}
                                    onChange={handleInputChange}
                                    class="block w-full mt-2 p-2 rounded-md shadow-sm border border-gray-400"
                                    placeholder="Entity Name"
                                    required
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-800">Website</span>
                                <input
                                    name="website"
                                    value={manufacturer.website}
                                    type="text"
                                    onChange={handleInputChange}
                                    class="block w-full mt-2 p-2 rounded-md shadow-sm border border-gray-400"
                                    placeholder="https://company.com"
                                    required
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-800">Address</span>
                                <input
                                    name="wallet_address"
                                    onChange={handleInputChange}
                                    value={manufacturer.wallet_address}
                                    type="text"
                                    class="block w-full mt-2 p-2 rounded-md shadow-sm border border-gray-400"
                                    placeholder="0x0000000000000000000000000000000000000000"
                                    required
                                />
                            </label>
                            <div class="">
                                <button
                                    type="submit"
                                    class="h-10 px-5 text-white bg-purple-400 hover:bg-purple-700 rounded-lg transition-colors duration-150 focus:shadow-outline"
                                >
                                    Register
                                </button>
                                <h6>(Only Admin can add an Entity.)</h6>
                            </div>
                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddManufacturer