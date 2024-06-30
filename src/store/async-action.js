import { createAsyncThunk } from "@reduxjs/toolkit";



export const getUsers = createAsyncThunk('getUsers', async (payload, thunkApi) => {
    const raw = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await raw.json();

    console.log(thunkApi);

    return thunkApi.fulfillWithValue(users);
});

export const getTodos = createAsyncThunk('getTodos', async () => {



});