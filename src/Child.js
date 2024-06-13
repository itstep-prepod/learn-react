import React, { useState, useEffect } from "react";

export const Child = () => {
  const [, rerender] = useState({});
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0); 

    const intervalId = setInterval(()=>{}, 1000);

    console.log(intervalId)
    // clearInterval(peremennaya)

  useEffect(() => {
    console.log('USE EFFECT');

    // feetch('https://jsonplaceholder.typicode.com/posts')
    // .then((rawData) => rawData.json())
    // .then((data) => stPosts(data));
    const func = (event) => {
      console.log('KEY PRESSED');
    }

    window.addEventListener('keypress', func);
    
  }, []);
  
  // 1. сделать запрос на посты
  // 2. сделать компонент для отображения ОДНОГО поста
  // 3. с помощью компонента отобразить первые 10 постов,  из массива (с помощью созданного комопнета)
  // 4. каждый пост должен иметь кнопку "toggle hot"
  // 5. при нажатии на кнопку toggle hot, вокруг поста должна начать мигать красная рамка (бордер) каждые пол секунды
  // 6. при нажатии на кнопку toggle hot еще раз мигание должно прекратиться

  console.log("RENDER CHILD!");

  return (
    <div>
      <h2>CHILD!</h2>
      <h3>counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => rerender({})}>rerender child</button>
    </div>
  );
};
