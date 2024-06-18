import React, { useState, useEffect} from "react";

export const Child = () => {
    const [, rerender] = useState({})
    const [posts, setPosts] = useState([])

    // setInterval

    // clearInterval

useEffect(() => {

    console.log("RERENDER CHILD")

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((rawData) => rawData.json())
    .then((data) => setPosts(data))
}, [] ) 
    

    return <div>
        <h2>CHILD!</h2>
        <button onClick={() => rerender({})}>rerender child</button>
        </div>
};