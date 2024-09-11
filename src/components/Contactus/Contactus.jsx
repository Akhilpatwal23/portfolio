import React from 'react';
import Email from './Email';

const Contactus = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className='w-full md:w-3/5 bg-white bg-opacity-50 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto p-4 mt-5 mb-5' id='contact'>
            <h1 className='text-5xl md:text-5xl font-bold text-center text-white mt-2 mb-5'>📥 Contact Us </h1>
            <div className='flex flex-col items-center justify-between h-full text-white'>
                <div className="bg-gray-50 card dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-8 lg:p-12">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                        Formal
                    </span>
                    <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-extrabold mb-2">✉ Email</h2>
                    <p className="text-sm md:text-lg font-normal dark:text-gray-400 mb-6">Feel free to get in touch with me via email below. Whether you have a project idea, collaboration proposal, or just want to say hello, I'd love to hear from you! Looking forward to connecting and exploring exciting opportunities together.</p>
                    <Email />
                    <button onClick={() => copyToClipboard("akhilpatwal70158@gmail.com")} className="cursor-pointer ml-3 ebutton inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Copy email 🧷
                    </button>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-4'>
                    <div className="bg-gray-50 card dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-8 lg:p-12">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            Informal
                        </span>
                        <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-extrabold mb-2">🕹 Discord</h2>
                        <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Connect with me on Discord: @Zenkai Whether it's discussing tech, gaming, bugs, or just having a friendly chat, I'm always open to meeting new people. Feel free to send me a friend request or message, and let's share our passions and ideas together.</p>
                        <button onClick={() => copyToClipboard("@Zenkai")} className="ebutton inline-flex justify-center items-center py-2.5 px-4 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Discord
                        </button>
                    </div>
                    <div className="bg-gray-50 card dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-8 lg:p-12">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            Code
                        </span>
                        <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-extrabold mb-2">💻 Github</h2>
                        <p className="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">For code contributions, bug reports, or any collaboration on projects, you can reach me via GitHub,  Or simply drop a message on any repository. Let's work together to build innovative solutions and make the coding world a better place!</p>
                        <a href="https://github.com/Akhilpatwal23" target="_blank" rel="noopener noreferrer" className="ebutton inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus;
