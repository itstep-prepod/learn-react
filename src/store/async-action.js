import { createAsyncThunk } from "@reduxjs/toolkit";
import {ENDPOINT} from '../constants/api';


export const getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkApi) => {
    const raw = await fetch(`${ENDPOINT}/users`);
    const users = await raw.json();

    return thunkApi.fulfillWithValue(users);
  }
);

export const getTodos = createAsyncThunk("getTodos", async (_, thunkApi) => {
  const raw = await fetch(`${ENDPOINT}/todos/all`);
  const todos = await raw.json();

  return thunkApi.fulfillWithValue(todos);
});

export const postTodos = createAsyncThunk('postTodos', async (_, thunkApi) => {
  const  raw = await fetch(`${ENDPOINT}/todos/all`, {
    method: 'POST',
    body: JSON.stringify({id: 2})
  });

  const response = await raw.json();

  return thunkApi.fulfillWithValue(response);
});
