import React, {useState} from 'react';

function Form({handleAdd}) {

    const [sourceName, setSourceName] = useState("");
    const [email, setEmail] = useState("");


    return (
        <div class="box">
        <div class="inputText" onChange={(e) => setSourceName[e.target.value]}>Source Name: </div>
            <input class="inputSource"></input>
        <div class="inputText" onChange={(e) => setEmail[e.target.value]}>Source Email: </div> 
            <input class="inputSource"></input>
            <button class="buttonGreen" type="button" onClick={() => handleAdd(sourceName, email)}>ADD</button>
</div>      
    );
}

export default Form;