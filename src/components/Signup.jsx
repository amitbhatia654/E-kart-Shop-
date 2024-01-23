import React, { useState } from 'react'
import { useStore } from '../HelperComponents/StoreProvider'

export default function Signup() {
    const store = useStore()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState("")


    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await store.signupNewUser(email, password)
            if (!res.uid){
                setError(res)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3 className='d-flex justify-content-center my-5'>Create New Account</h3>
            <div className='container'>
                <div className='row d-flex justify-content-center my-5 '>
                    <div className='col-md-6 border py-4  px-4' >
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value), setError("") }} value={email} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" required id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value), setError(" ") }} value={password} />
                            </div>

                            <button type="submit" className="btn btn-primary" >Submit</button>
                            <p className='text-danger'>{error}</p>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
