import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import { Loader } from './Loader';
import OwnerHistory from './OwnerHistory';
import { contractABI, contractAddress, options } from '../lib';

const CheckDrug = () => {
    const [drugDetail, setDrugDetail] = useState('')
    const [drugID, setDrugID] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getManufacturer = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                setDrugDetail('')
                setIsLoading(true)
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const DrugDetectionContract = new ethers.Contract(contractAddress, contractABI, signer);
                const drugInfo = await DrugDetectionContract.getDrug(drugID)
                console.log(drugInfo)
                const drugInfoCleaned =
                {
                    id: drugInfo.id.toNumber(),
                    name: drugInfo.name,
                    model: drugInfo.model,
                    manufacturer: drugInfo.manufacturer,
                    initialPrice: drugInfo.price.toNumber(),
                    exists: drugInfo.exists,
                    curOwner: drugInfo.curOwner,
                    manufacturedTimestamp: new Date(drugInfo.manufacturedTimestamp.toNumber() * 1000),
                    owners: drugInfo.owners.map((owner) => {
                        return {
                            owner: owner.curOwner,
                            timestamp: new Date(owner.curTimestamp.toNumber() * 1000)
                        }
                    })
                }
                setDrugDetail(drugInfoCleaned)
                setIsLoading(false)
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            setIsLoading(false)
            alert(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setDrugDetail('')
        getManufacturer()
    }

    useEffect(() => {
        setDrugDetail(drugDetail)
    }, [drugDetail])
    return (
        <div className="rounded-lg mb-4 h-auto bg-gray-600" id="detectDrug">
            <div class="font-sans p-4 text-white w-full justify-center">
                <h3 className="text-xl mb-3 font-bold">
                    Check the Drugs
                </h3>
                <form class="border rounded w-full overflow-hidden flex" onSubmit={handleSubmit}>
                    <input
                        class="appearance-none block w-full bg-gray-600 text-gray-200 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:text-gray-800 focus:border-gray-200"
                        id="grid-password"
                        type="search"
                        name='drugID'
                        value={drugID}
                        onChange={(e) => setDrugID(e.target.value)}
                        placeholder="Enter the Drug ID"
                    />
                </form>
                {isLoading && <div className='mx-auto py-6 flex justify-center'><Loader /></div>}

                {drugDetail && <div class="justify-center text-center">
                    {drugDetail.exists ? <> <ul class="bg-gray-600 grid h-auto mt-4 content-center w-full text-gray-200">
                        <li class="px-6 py-2  w-full"><b>Drug ID:</b> {drugDetail.id}</li>
                        <li class="px-6 py-2  w-full"><b>Drug Name:</b> {drugDetail.name}</li>
                        <li class="px-6 py-2  w-full"><b>Drug Info:</b> {drugDetail.model}</li>
                        <li class="px-6 py-2  w-full"><b>Initial Price:</b> {drugDetail.initialPrice}</li>
                        <li class="px-6 py-2  w-full"><b>Manufacturer:</b> {drugDetail.manufacturer}</li>
                        <li class="px-6 py-2  w-full"><b>Current Owner:</b> {drugDetail.curOwner}</li>
                        <li class="px-6 py-2  w-full"><b>Manufactured Time Stamp:</b> {drugDetail.manufacturedTimestamp.toLocaleString("en-US", options)}</li>

                    </ul>
                        {drugDetail.owners && <OwnerHistory owners={drugDetail.owners} />}
                    </>
                        :
                        <ul class="flex justify-center text-center bg-white mt-8 border border-gray-800 w-96 text-gray-900">
                            <li class="px-6 py-2  w-full bg-red-600 text-white">
                                Drug is Not Available
                            </li>
                        </ul>
                    }
                </div>}
            </div>
        </div>
    )
}

export default CheckDrug