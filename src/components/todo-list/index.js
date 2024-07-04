import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Todo } from '../todo';
import {useSelector} from 'react-redux';
import {getFilteredByIdTodos} from '../../store/selectors';

export const TodoList = ({userId}) => {
    const todos = useSelector((state) => getFilteredByIdTodos(state, userId));

    console.log(todos);

    return (
        <ListGroup >
            <ListGroup.Item><Todo/></ListGroup.Item>
        </ListGroup>
    );
};