import React, { useEffect, useState, useCallback } from "react";
import { Post } from "./Post";

// 1. state
// 2. props
// 3. context
// 4. parent
// 5. force rerender

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [, rerender] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(
          data.filter(({ body }) => body.length > 200).slice(0, 11)
        );
      });
  }, []);

  const postsToDisplay = posts
    .filter(({ body }) => {
      // console.log('FIRST FILTER')
      return body.length > 200;
    })
    .slice(0, 11)
    .filter(({ isActive }) => {
      // console.log('SECOND FILTER');
      if (currentFilter === "active") {
        return isActive;
      }
      if (currentFilter === "notActive") {
        return !isActive;
      }

      return true;
    });

  const onFilterChange = ({ target: { name } }) => {
    setCurrentFilter(name);
  };

  const fn = (id) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return { ...post, isActive: !post.isActive };
        } else {
          return post;
        }
      });
    });
  };

  const onActiveChange = useCallback(fn, []);

  return (
    <div>
      <button onClick={() => rerender({})}>rerernder</button>
      <div>
        <button
          name="active"
          onClick={onFilterChange}
          disabled={currentFilter === "active"}
        >
          active
        </button>
        <button
          name="notActive"
          onClick={onFilterChange}
          disabled={currentFilter === "notActive"}
        >
          not active
        </button>
        <button
          name="all"
          onClick={onFilterChange}
          disabled={currentFilter === "all"}
        >
          all
        </button>
      </div>
      {postsToDisplay.map((props) => (
        <Post
          {...props}
          key={props.id}
          onActiveChange={onActiveChange}
          isActive={props.isActive}
        />
      ))}
    </div>
  );
};
