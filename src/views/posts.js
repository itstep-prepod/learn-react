import React from "react";
import { Route, Routes } from "react-router-dom";
import {Smth} from './smth.js';
import {Post} from './post.js';

export const Posts = () => {

    // /posts/asdasds
  return (
    <>
      <div>Many posts here</div>
      <Routes>
        <Route path="/" element={<Smth/>}/>
        <Route path="/:postId" element={<Post/>}/>
      </Routes>
    </>
  );
};
