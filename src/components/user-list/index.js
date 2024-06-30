import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { User } from '../user';

export const UserList = () => {
    return (
        <ListGroup horizontal >
            <ListGroup.Item><User/></ListGroup.Item>
        </ListGroup>
    );
};