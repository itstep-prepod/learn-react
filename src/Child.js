import React, { useState} from "react";

export const Child = () => {
    const [, rerender] = useState({})

    // setInterval

//    clearInterval

    console.log("RERENDER CHILD")

    return <div>
        <h2>CHILD!</h2>
        <button onClick={() => rerender({})}>rerender child</button>
        </div>
};