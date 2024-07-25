import React, {useEffect} from "react";
import { TodoList } from "./components/todo-list";
import { useDispatch } from "react-redux";
import {setIsLoading} from './store/slice';
import { TodoCreate } from "./components/todo-create";
import { getTodos } from "./store/async-action";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getTodos());
    }, []);

    return <div>
        <TodoCreate/>
        <TodoList />
    </div>
}
