import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postTodo } from "../../store/async-action";

export const TodoCreate = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const onTextChange = ({ target: { value } }) => {
    setTodoText(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postTodo(todoText));
    setTodoText("");
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group>
        <Form.Label>Todo text</Form.Label>
        <Form.Control
          value={todoText}
          onChange={onTextChange}
          type="text"
          placeholder="Type here"
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Create todo</Button>
      </Form.Group>
    </Form>
  );
};
