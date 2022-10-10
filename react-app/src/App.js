import logo from './logo.svg';
import './App.css';

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

    <div class="box">
            <div class="inputText">Source Name: </div>
                <input class="inputSource"></input>
            <div class="inputText">Source Email: </div> 
                <input class="inputSource"></input>
                <button class="buttonGreen">ADD</button>
    </div>

    <div class="listItem">
        <div class="listName">1 </div>
        <div class="listName centeredText">Presbo </div>
        <div class="listEmail centeredText">presbo@columbia.edu </div> 
        <button class="buttonRed">DELETE</button>
    </div>

    <div class="listItem">
        <div class="listName">2 </div>
        <div class="listName centeredText">John Jay Mouse </div>
        <div class="listEmail centeredText">mouse@columbia.edu </div> 
        <button class="buttonRed">DELETE</button>
    </div>

    <div class="listItem">
        <div class="listName">3 </div>
        <div class="listName centeredText">Water Bottle Man </div>
        <div class="listEmail centeredText">flipper@columbia.edu </div> 
        <button class="buttonRed">DELETE</button>
    </div>
    </body>
  );
}

export default App;
