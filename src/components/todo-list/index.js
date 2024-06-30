import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Todo } from '../todo';

export const TodoList = () => {
    return (
        <ListGroup >
            <ListGroup.Item><Todo/></ListGroup.Item>
        </ListGroup>
    );
};