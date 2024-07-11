import React, {useEffect} from "react";
import { TodoList } from "./components/todo-list";
import { useDispatch } from "react-redux";
import { getTodos, postTodos } from "./store/async-action";
import {setIsLoading} from './store/slice';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(postTodos());
    }, []);

    return <div>
        <TodoList />
    </div>
}
