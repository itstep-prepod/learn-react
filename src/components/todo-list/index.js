import React from "react";
import { ListGroup } from "react-bootstrap";
import { Todo } from "../todo";
import { useSelector } from "react-redux";
import { getTodos } from "../../store/selectors";

export const TodoList = () => {
  const todos = useSelector(getTodos);

  return (
    <ListGroup>
      {todos.map((props) => (
        <ListGroup.Item key={props.id}>
          <Todo {...props} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
