import React, {useEffect} from "react";
import { TodoList } from "./components/todo-list";
import { UserList } from "./components/user-list";
import { useDispatch } from "react-redux";
import { getUsers, getTodos } from "./store/async-action";
import {setIsLoading} from './store/slice';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getUsers());
        dispatch(getTodos());
    }, []);

    return <div>
        <UserList />
    </div>
}


// 1. при клике на одного юзера, рядом с ним появляется его туду лист
// 2. в туду листе должны быть ТОЛЬКО тудухи конкретного юзера
// 3. при клике на кнопку complete состояние конкретной тудухи должно меняться\
// 4. добавить возможность удалять тудуху
// 5. ОПТИМИЗИРОВАТЬ РЕНДЕР ТУДУХ и ЮЗЕРОВ (например если я удаляю конкретую тудуху, то соседние тудухи НЕ должны делать ререндер )