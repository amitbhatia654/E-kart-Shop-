import React, { useEffect, useState } from 'react'
import { useStore } from '../HelperComponents/StoreProvider'
import toast from 'react-hot-toast'

export default function UpdateProfile() {
    const store = useStore()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')


    useEffect(() => {
        getProfileData()
    },[])


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const res = await store.updateUserProfile(store.loginUser.uid, name, phone, address)
            if (res=="Profile Updated Suucessfully"){
                toast.success(res)
            }
        } catch (error) {
            console.log(error)
            return error.message
        }
    }



     const  getProfileData = async () => {
        const res = await store.myProfile()
        setName(res.name)
        setPhone(res.phone)
        setAddress(res.address)
    }
    return (
        <div className='my-5 mx-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value), setError("") }} value={name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contact No.</label>
                    <input type="number" className="form-control" required id="exampleInputPassword1" onChange={(e) => { setPhone(e.target.value), setError(" ") }} value={phone} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" required id="exampleInputPassword1" onChange={(e) => { setAddress(e.target.value), setError(" ") }} value={address} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
                <p className='text-danger'>{error}</p>

            </form>


        </div>
    )
}
