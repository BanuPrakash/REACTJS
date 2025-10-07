import React, { useState } from 'react'

export default function Counter() {
    let [count, setCount] = useState(0);
    //  let [name, setName] = useState("George");
    // below code won't trigger reconcilliation
    //   function doIncrement() {
    //     count = count + 1;
    //   }
    return (    
        <div>
            Counter <br />
            Count : {count} <br />
            <button type='button' 
                onClick={() => setCount(count + 1)}>
                        Increment
            </button>
        </div>
    )
}
