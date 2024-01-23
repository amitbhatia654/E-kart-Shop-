import React from 'react'
import { useStore } from '../HelperComponents/StoreProvider'
import {useNavigate} from "react-router-dom"

export default function LoginMenu() {
    const store = useStore();
    const navigate=useNavigate()
    return (
        <>
            <span className="btn-group">
                <span  className="btn btn-light">{store.loginUser?.email}</span>
                <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={()=>navigate('/myprofile')}>My Profile</button></li>
                    <li><button className="dropdown-item" onClick={()=>navigate('/updateprofile')}>Update Profile</button></li>
                    <li><button className='btn btn-danger mx-3' onClick={() => store.logout()}>Logout</button></li>
                </ul>
            </span>
        </>
    )
}



