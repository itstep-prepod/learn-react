import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Todo = ({ title, completed, id }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Button variant="success">complete</Button>
      </Card.Body>

      {/* secondary */}
    </Card>
  );
};
