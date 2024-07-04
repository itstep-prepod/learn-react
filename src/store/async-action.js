import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkApi) => {
    const raw = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await raw.json();

    return thunkApi.fulfillWithValue(users);
  }
);

export const getTodos = createAsyncThunk("getTodos", async (_, thunkApi) => {
  const raw = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await raw.json();

  return thunkApi.fulfillWithValue(todos);

});
