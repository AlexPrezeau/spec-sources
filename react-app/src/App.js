import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.js';
import List from './Components/List.js';

function App() {
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
    </body>
  );
}

export default App;
