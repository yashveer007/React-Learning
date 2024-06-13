import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-cyan-700 h-auto border-y flex justify-between items-center
         border-12; border-red-500">
            <div className='p-4 h-auto items-center'>
                <img
                    className='h-10 w-10'
                    src='https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=600'
                    alt='No img found' 
                />
            </div>
            <div className='grid grid-cols-2 gap-12 px-5 py-5'>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>about</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>privacy and policy</li>
                        <li>Terms &amp; Conditions</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
