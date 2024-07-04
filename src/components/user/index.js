import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { TodoList } from "../todo-list";

export const User = ({ name, email, phone, id }) => {
  const [showTodos, setShowTodos] = useState(false);

  const onClick = () => {
    setShowTodos((prev) => !prev);
  };

  return (
    <>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{phone}</Card.Subtitle>
        <Card.Text>{email}</Card.Text>
        <Button onClick={onClick}>Show todos</Button>
      </Card>
      {showTodos && <TodoList userId={id} />}
    </>
  );
};
