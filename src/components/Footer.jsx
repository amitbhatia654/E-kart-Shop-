import React from 'react'

export default function Footer() {
    return (
        <div className='container-fluid bg-primary bg-gradient text-light px-5 py-4'>
            <div className='row'>
                <div className=' col-md-3'>
                    <span className='text-dark fw-bold fs-4' >About</span>

                    <ul>
                        <li>All Products</li>
                        <li>Mobiles</li>
                        <li>Laptop</li>
                        <li>EarPhones</li>
                        <li>Battery & Chargers</li>
                    </ul>

                </div>
                <div className=' col-md-3'>
                    <span className='text-dark fw-bold fs-4' >Social Links</span>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>whatsapp</li>
                    </ul>
                </div>

                <div className=' col-md-3'>
                    <span className='text-dark fw-bold fs-4' >
                        Register Office Address
                    </span>

                    <br></br>
                    <span>
                        Internet Private Limited, <br></br>
                        Buildings Alyssa, Begonia &
                        Bengaluru, 560103,
                        Karnataka, India <br></br>
                        CIN : U51109KA2012PTC0661   <br></br>
                        +91 8889974581
                    </span>

                </div>

                <div className=' col-md-3'>
                    <span className='text-dark fw-bold fs-4' >Contact us</span>
                    <br></br>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1586671787054!2d77.3157641745713!3d28.59501648578506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5275337b799%3A0x3baa7bd6c3dd47b0!2sSarTia%20Global!5e0!3m2!1sen!2sin!4v1705905081894!5m2!1sen!2sin"
                        width="250"
                        height="200"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>

                <span className='fw text-dark text-center font-italic' >All Rights Reserved to  E-Kart Shop.com @2022</span>
            </div>
        </div>
    )
}
