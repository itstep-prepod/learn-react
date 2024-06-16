import React, { useEffect, useRef, useState } from "react";

export const News1 = () => {
    const inputRef = useRef(null);
    const [, rerender] = useState({});

    const onClick = () => {
        rerender({});
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <h1>NEWS!</h1>
            <input  ref={inputRef} type="text" id="test"/>
            <button onClick={onClick}>rerender</button>
        </div>
    );
};