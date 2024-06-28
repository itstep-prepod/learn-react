import React from "react";
import {Routes, Route} from 'react-router-dom';
import { Main } from "./views/main";
import { Posts } from "./views/posts";
import { Layout } from "./views/layout";
import { NotFound } from "./views/not-found";
import { Categories } from "./views/categories";



export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="/posts/*" element={<Posts/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

