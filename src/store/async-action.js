import { createAsyncThunk } from "@reduxjs/toolkit";
import {firebase} from 'firebase';


export const getUsers = createAsyncThunk('getUsers', async (payload, thunkApi) => {
    const raw = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await raw.json();

    return thunkApi.fulfillWithValue(users);
});

export const getTodos = createAsyncThunk('getTodos', async () => {



});