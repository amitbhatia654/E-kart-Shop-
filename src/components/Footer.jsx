import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid text-light px-5 py-4 footer">
      <div className="container">
        <div className="row">
          <div className=" col-md-2">
            <span className="text-dark fw-bold fs-4 ">About</span>

            <ul>
              <li>All Products</li>
              <li>Mobiles</li>
              <li>Laptop</li>
              <li>EarPhones</li>
              <li>Battery & Chargers</li>
            </ul>
          </div>
          <div className=" col-md-2">
            <span className="text-dark fw-bold fs-4">Services</span>

            <ul>
              <li>Services</li>
              <li>Mobiles</li>
              <li>Laptop</li>
              <li>EarPhones</li>
              <li>Home Decor</li>
            </ul>
          </div>
          <div className=" col-md-2">
            <span className="text-dark fw-bold fs-4">Social Links</span>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Whatsapp</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className=" col-md-3">
            <span className="text-dark fw-bold fs-4">Register Office</span>

            <br></br>
            <span>
              Internet Private Limited, <br></br>
              Buildings Alyssa, Begonia & Bengaluru, 560103, Karnataka, India{" "}
              <br></br>
              CIN : U51109KA2012PTC0661 <br></br>
              +91 8889974581
            </span>
          </div>

          <div className=" col-md-3">
            <span className="text-dark fw-bold fs-4">Location</span>
            <br></br>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28570.018254188686!2d80.30453759999997!3d26.47982079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3826a363cb69%3A0xe305b576af97eaca!2sJ.%20K.%20Temple!5e0!3m2!1sen!2sin!4v1732088630828!5m2!1sen!2sin"
              width="280"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <span className="fw text-dark text-center font-italic">
            All Rights Reserved to E-Kart Shop.com 2024
          </span>
        </div>
      </div>
    </div>
  );
}
