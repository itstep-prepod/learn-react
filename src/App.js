import React from "react";
import { TodoList } from "./components/todo-list";
import { UserList } from "./components/user-list";

export const App = () => {
    return <div>
        <TodoList />
        <UserList />
    </div>
}