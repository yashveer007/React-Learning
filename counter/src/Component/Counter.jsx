import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(counter);
    },[counter])

    const increment = () => {
        setCounter((prev) => prev + 1);
    }

    return (
        <div className= {`text-center`}>
            <div >
                <button onClick={increment}> Increase </button>
                <h2>{counter}</h2>
                <button onClick={() => { setCounter((prev) => prev - 1) }}> Decrease </button>
            </div>
        </div>
    )
}
