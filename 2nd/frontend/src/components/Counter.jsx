import React, { useState, useEffect } from 'react'

const Counter = () => {
    
    const [a, seta] = useState(0);

    const inc = () => {
        seta(a + 1);
    };
    const dec = () => {
        seta(a - 1);
    };
    const re = () => {
        seta(0);
    }

    useEffect(() => {
        console.log("No dependency array — runs on every render");
    });

    useEffect(() => {
        console.log("Empty dependency array — runs only once");
    }, []);

    useEffect(() => {
        console.log("With dependency [a] — runs only when a changes");
    }, [a]);

    return (
        <div>
            <h1 style={{color: a < 0 ? "firebrick" : a === 0 ? "antiquewhite" : "blanchedalmond"}}>
                Counter: {a}
            </h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={re}>Reset</button>
            
        </div>
    )
}

export default Counter