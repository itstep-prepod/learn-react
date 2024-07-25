import React from "react";
import { ListGroup } from "react-bootstrap";
import { User } from "../user";
import { useSelector } from "react-redux";
import { getUsersFromState, getIsLoading } from "../../store/selectors";
// import { Lines } from "react-preloaders";

export const UserList = () => {
  const users = useSelector(getUsersFromState);
  const isLoading = useSelector(getIsLoading); // false

  return (
    isLoading ? 
    <div>loading</div> : 
    <ListGroup horizontal>
      {users.map((userProps) => (
        <ListGroup.Item key={userProps.id}>
          <User {...userProps} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
