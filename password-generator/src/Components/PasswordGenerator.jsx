import React from 'react'
import { useState, useCallback, useEffect,useRef } from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState(6);
    const [numeric, setNumeric] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [password, setPassword] = useState("");
    console.log(password);

    const copyToClipboard = () =>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }

    const passwordGenerated = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numeric) {
            str += "1234567890"
        }
        if (specialChar) {
            str += "~!@#$%^&*(){}[]"
        }

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(index);
        }
        setPassword(pass);
    }, [length, numeric, specialChar])

    useEffect(() => {
        passwordGenerated()
    }, [length, numeric, specialChar])

    const passwordRef = useRef(null);

    return (
        <div className='bg-gray-400  text-center'>
            <div className='bg-green-400'>
                <div> Password Generator : </div>
                <input 
                type="text" 
                placeholder='password' 
                value={password} 
                ref={passwordRef}
                readOnly />
                <button className='bg-blue-500'
                onClick={copyToClipboard}
                >Copy</button><br />
                <div>
                    <input
                        type="range"
                        min={6}
                        max={25}
                        value={length}
                        onChange={(e) => { setLength(e.target.value) }} />
                    <label>Length: {length}</label>
                    <input type="checkbox"
                        onChange={() => { setNumeric((prev) => !prev) }} />
                    <label>Number</label>
                    <input type="checkbox"
                        onChange={() => { setSpecialChar((prev) => !prev) }} />
                    <label>Special Char</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator