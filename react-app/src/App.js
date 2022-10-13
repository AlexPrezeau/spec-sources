import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.js';
import List from './Components/List.js';
import React, {useState} from 'react';

const initialList = [{source: "Presbo", sourceEmail: "presbo@columbia.edu"},
                    {source: "John Jay Mouse", sourceEmail: "mouse@columbia.edu"},
                    {source: "Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]

function App() {
  
  const [emailList, setEmailList] = useState([initialList]);
         //[variable, setter method] = useState([the initial state])

  function handleDelete(emailIndex) {
    const updatedList = emailList.slice(0, emailIndex).concat(emailList.slice[emailIndex + 1]); 

    setEmailList(updatedList);
  }

  function handleAdd() {

  }

  return (
    <body>
      <div class="logo">
          <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" 
          alt="Spectator Logo" width= "263" height="55"/>
      </div>

      <div class="title">
          <h1> Spectator's Sources</h1>
      </div>

      <Form/>
      <List/>
      <List emailList={emailList} handleDelete={handleDelete}/>
    </body>
  );
}

export default App;
