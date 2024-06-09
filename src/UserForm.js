import React, { useState } from "react";


export const UserForm = ({addUserAdd}) => {
    const [userInfo, setUserInfo] = useState({name: '', age:'', phone: ''})
    const [inpName,setInpName] = useState("");
    const [inpAge,setInpAge] = useState("");
    const [inpPhone,setInpPhone] = useState("");
 
    // const onInputName = (event) => {
    //     setInpName(event.target.value);
    //   };
    // const onInputAge = (event) => {
    //     setInpAge(event.target.value);
    //   };
    // const onInputPhone = (event) => {
    //     setInpPhone(event.target.value);
    //   };

  const onUserInfoChange = ({target})


   const AddPerson = () => {
    const newPerson = (id:Math.random())
   }


    return (
        <div>
          <input  type="name" placeholder="name" value={inpName} onChange={onInputName} />
          <input  type="age" placeholder="age" value={inpAge} onChange={onInputAge}/>
          <input  type="phone" placeholder="phone" value={inpPhone} onChange={onInputPhone}/>
          <button onClick={() => addUserForm(inpName,inpAge,inpPhone)}>Добавить</button>
        </div>
      );
}