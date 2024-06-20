import React, {memo} from "react";
import styles from "./Post.module.css";

export const Post = memo(({ title, body, id, onActiveChange, isActive }) => {
  const onCheck = () => {
    onActiveChange(id);
  };

  console.log(`POST ${id} renders`);

  return (
    <div className={isActive ? styles.active : ""}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onCheck}>check</button>
    </div>
  );
});
