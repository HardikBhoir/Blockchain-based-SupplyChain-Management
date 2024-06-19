import React, { useState } from 'react'
import { contractABI, contractAddress } from '../lib';
import { ethers } from "ethers";
import { Loading } from './Loader';

const CreateDrug = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [drugCreated, setDrugCreated] = useState('')

    const [drug, setDrug] = useState({
        drug_name: '',
        model: '',
        price: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        setDrug(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const createDrug = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                setDrugCreated('')
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const DrugDetectionContract = new ethers.Contract(contractAddress, contractABI, signer);
                const drug_record = await DrugDetectionContract.createDrug(
                    drug.drug_name,
                    drug.model,
                    drug.price,
                    { gasLimit: 3000000 })
                const receipt = await drug_record.wait()
                const data = receipt.logs[0].data
                const [drug_id, man_address] = ethers.utils.defaultAbiCoder.decode(
                    ['uint', 'address'], data
                )
                setDrugCreated(drug_id.toNumber())
                console.log("drug ", drug_id, "created by", man_address)
                setIsLoading(false)
                setProduct({ drug_name: '', model: '', price: '' })
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
        createDrug()
    }

    return (
        <>
            {isLoading && <Loading />}
            <div className="border-2 border-gray-200 rounded-lg h-auto bg-gray-800">
                <div class="font-sans p-4 text-black w-full  justify-center">
                    <h3 className="text-xl mb-3 text-white font-bold">
                        Create new Drug
                    </h3>
                    <h6 className="text-white">(Only Manufacturer can add new Drug.)</h6>
                    <div class="w-full px-4 py-4 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <label class="block mb-6">
                                <span class="text-gray-200">Drug Name</span>
                                <input
                                    type="text"
                                    name="drug_name"
                                    value={drug.drug_name}
                                    class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                    placeholder="Drug Name"
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-200">Drug Info</span>
                                <input
                                    value={drug.model}
                                    name="model"
                                    type="text"
                                    class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                    placeholder="Drug Info"
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-200">Price</span>
                                <input
                                    value={drug.price}
                                    name="price"
                                    type="number"
                                    class="block w-full mt-2 p-2 rounded-md shadow-sm"
                                    placeholder="Rs."
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <div class="">
                                <button
                                    type="submit"
                                    class="h-10 px-5 text-white bg-purple-400 hover:bg-purple-700 rounded-lg transition-colors duration-150 focus:shadow-outline "
                                >
                                    Create Drug
                                </button>

                            </div>
                            {drugCreated && <p className='text-normal my-2 text-green-500 font-bold'>Drug with ID {drugCreated} created Successfully!</p>}
                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateDrug