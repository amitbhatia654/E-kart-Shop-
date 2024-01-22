import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Checkout() {
    const navigate=useNavigate()
    return (
        <div>
        <button className='btn btn-dark my-2' onClick={(()=>navigate('/mycart'))}>Go Back</button>
        <h2>CHECKOUT</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'></div>
                </div>
            </div>
        </div>
    )
}
