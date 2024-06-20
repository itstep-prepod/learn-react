import React, { useEffect, useRef, useState } from "react";
import { useFirstRender } from "./useFirstRender";

export const News = () => {
    const [state, rerender] = useState({});
    const isFirstRender = useFirstRender();
   


    const onClick = () => rerender({})

    return (
        <div>
            <h1>NEWS!</h1>
            {isFirstRender ? <div>MOUNT</div> : <div>UPDATE</div>}
            <button onClick={onClick}>rerender</button>
        </div>
    );
};