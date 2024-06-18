import React, { useState } from "react";

export const UserForm = ({onUserAdd}) => {
  const [userInfo, setUserInfo] = useState({ name: "", age: "", phone: "" });

  const onUserInfoChange = ({target}) => {
    setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [target.name]: target.value
    }));
  };

  const onSubmitClick = () => {
    onUserAdd({ id: Math.random(), ...userInfo });
  };


  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={onUserInfoChange}
        value={userInfo.name}
      />
      <input
        type="text"
        name="age"
        onChange={onUserInfoChange}
        value={userInfo.age}
      />
      <input
        type="text"
        name="phone"
        onChange={onUserInfoChange}
        value={userInfo.phone}
      />
      <button onClick={onSubmitClick}>ok</button>
    </div>
  );
};

// Мой вариант решенияб но недаработан. Сверху вариант преподавателя.

// export const UserForm = (onUserAdd) => {
//   const [userName, setUserName] = useState("");
//   const [userAge, setUserAge] = useState("");
//   const [userPhone, setUserPhone] = useState("");
   

//   const onSubmit = () => {
//     onUserAdd({id: Math.random(), userName, userAge, userPhone});
//     setUserName("");
//     setUserAge("");
//     setUserPhone("");
//   };

//     return (<div>
//     <input type="text" 
//     name="name" 
//     value={userName} 
//     onChange = {(event) => {setUserName(event.target.value)}}/>

//     <input type="text"
//      name="age"
//      value={userAge} 
//      onChange = {(event) => {setUserAge(event.target.value)}}/>

//     <input type="text"
//      name="phone" 
//      value={userPhone} 
//      onChange={(event) => {setUserPhone(event.target.value)}}/>

//     <button onClick={ () => onSubmit() }>Submit</button>
//     </div>
//   )
//  }