import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";

export const User = ({ name, email, phone, id }) => {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{phone}</Card.Subtitle>
      <Card.Text>{email}</Card.Text>
      <Button>Show todos</Button>
    </Card>
  );
};
