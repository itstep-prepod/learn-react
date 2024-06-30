import React, {useEffect} from "react";
import { TodoList } from "./components/todo-list";
import { UserList } from "./components/user-list";
import { useDispatch } from "react-redux";
import { getUsers } from "./store/async-action";
import {setIsLoading} from './store/slice';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getUsers());
    }, []);

    return <div>
        <TodoList />
        <UserList />
    </div>
}