import React from "react";
import { useParams, Navigate } from "react-router-dom";


export const Post = () => {
    const {postId} = useParams(); // /post/12313 <<<<<< postId

    console.log(typeof postId);

    if ( postId !== "1" && postId !== "2") {
        return <Navigate to={'/not-found'}/>
    }

    return <div>some post number {postId}</div>
};