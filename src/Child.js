import React, { useState, useEffect } from "react";
import {Post} from './Post';

export const Child = () => {
  const [, rerender] = useState({});
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0); 

  const intervalId = setInterval(()=>{}, 1000);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((rawData) => rawData.json())
    .then((data) => setPosts(data));    
  }, []);
  
  console.log(posts)

  // 1. сделать запрос на посты
  // 2. сделать компонент для отображения ОДНОГО поста
  // 3. с помощью компонента отобразить первые 10 постов,  из массива (с помощью созданного комопнета)
  // 4. каждый пост должен иметь кнопку "toggle hot"
  // 5. при нажатии на кнопку toggle hot, вокруг поста должна начать мигать красная рамка (бордер) каждые пол секунды
  // 6. при нажатии на кнопку toggle hot еще раз мигание должно прекратиться

  return (
    <div>
      <h2>CHILD!</h2>
      {posts.map((props) => {
        return (<Post {...props} key={props.id}/>)
      })}
    </div>
  );
};
