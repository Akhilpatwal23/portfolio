import React, { useState, useRef  } from 'react'
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
     
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, name, message});
        emailjs
        .sendForm(import.meta.env.VITE_Service_ID, import.meta.env.VITE_Template_ID, form.current, {
          publicKey: import.meta.env.VITE_Public_Key,
        })                
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        togglePopup(); // Close the popup after submission
    }

    return (
        <>
            <button onClick={togglePopup} className="cursor-pointer  inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Email
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full dark:text-gray-400">
                        <h2 className="text-2xl font-bold text-white mb-4">Send us an email</h2>
                        <form ref={form}  onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <input type="email" placeholder='Enter your Email' id="email" name="email" value={email} 
                                    onChange={(e) => setEmail(e.target.value)} required 
                                    className="w-full px-3 py-2 border rounded-lg"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name"  className="block mb-2">Name</label>
                                <input type="text" id="name" placeholder='Enter your Name' name="name" value={name} 
                                    onChange={(e) => setName(e.target.value)} required 
                                    className="w-full px-3 py-2 border rounded-lg"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea id="message" name="message" placeholder='Enter your message here....' value={message} 
                                    onChange={(e) => setMessage(e.target.value)} required 
                                    className="w-full px-3 py-2 border rounded-lg"/>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={togglePopup} className="mr-2 px-4 py-2 bg-gray-200  dark:text-gray-500 rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Email