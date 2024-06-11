import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import './ContactForm.css';


function ContactFormDesign() {
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({...values, [name]: value}))

      }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name:  ${inputs.username}\nEmail:  ${inputs.email}\nTel:  ${inputs.phoneNumber}\nMessage:  ${inputs.message}`)
      setInputs({}); // This will clear the inputs
    }

  return (
    <>
      <div className="contactForm-container">

      
      <div className="contactForm-content">
        
      <h1 className='contactHeading'>Connect</h1>

        <form onSubmit={handleSubmit}>

            <div className="name">
                <label>Name<br />
                    <input 
                        type="text" 
                        name="username" 
                        value={inputs.username || ""} 
                        onChange={handleChange}
                        placeholder="Your name"
                    />
                </label>
            </div>

            <div className="email">
                <label>Email<br />
                    <input 
                    type="text" 
                    name="email" 
                    value={inputs.email || ""} 
                    onChange={handleChange}
                    placeholder="exsample@mail.com"
                    />
                </label>
            </div>

            <div className="phone">
                <label>Phone Number<br />
                <input 
                    type="tel" 
                    name="phoneNumber" 
                    value={inputs.phoneNumber || ""} 
                    onChange={handleChange}
                    placeholder="+94 123-45-678"
                />
                </label>
            </div>

            <div className="message">
                    <label>Your Message<br />
                    <textarea 
                    name="message" 
                    value={inputs.message || ""} 
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    />
                </label>
            </div>

         <input type="submit" value="Submit" />

        </form>

   
        

    </div>
    </div>
    </>
  );
}

export default ContactFormDesign;