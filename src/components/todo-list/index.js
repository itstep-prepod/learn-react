import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Todo } from '../todo';
import {useSelector} from 'react-redux';
import {getTodos} from '../../store/selectors';

export const TodoList = ({userId}) => {
    const todos = useSelector(getTodos);

    return (
        <ListGroup >
            <ListGroup.Item><Todo/></ListGroup.Item>
        </ListGroup>
    );
};