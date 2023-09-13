import { useState } from "react";
const Courses = () => {
  const [nameList, setNameList] = useState([]);
  const [newUser, setNewUser] = useState("");
  const addUser = (e) => {
    setNewUser(e.target.value);
  };
  const inputText = document.querySelector("input");
  const addToList = () => {
    const user = {
      id: nameList.length === 0 ? 1 : nameList[nameList.length - 1].id + 1,
      username: newUser,
    };
    setNameList([...nameList, user]);
    inputText.value="";
  };

  const delUser = (getUser) => {
    setNameList(nameList.filter((name) => name.id !== getUser));
  };
  return (
    <div>
      Add Course: <input type="text" onChange={addUser} />
      <br />
      {inputText.value !== "" && <button onClick={addToList}>Add Course</button>}
      {nameList.map((user, index) => {
        return (
          <div>
            <h3 key={index}>{user.username}</h3>
            <button onClick={() => delUser(user.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};
export default Courses;

 {/* Hossein Farahkordmahaleh */}
