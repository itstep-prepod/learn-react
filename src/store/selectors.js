import { createSelector } from "@reduxjs/toolkit";

const getState = (state) => state.users;

export const getUsersFromState = (state) => {
  return state.users.users;
};

export const getIsLoading = (state) => {
  return state.users.isLoading;
};

export const getTodosFromState = (state) => {
  return state.users.todos;
};

export const getFilteredByIdTodos = (state, selectedUserId) => {
  return state.users.todos.filter(({ userId }) => userId === selectedUserId);
};

export const getTodos = createSelector(getState, (state) => state.todos);
