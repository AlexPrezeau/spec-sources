import React, {useState} from 'react';

function Form({handleAdd}) {

    const [sourceName, setSourceName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(){
        handleAdd(sourceName, email)
        document.getElementById("form").reset()
        setSourceName("")
        setEmail("")
    }

    return (
        //change to form?
        <form id="form" class="box">
            <div class="inputText">Source Name: </div>
                <input class="inputSource" onChange={(e) => setSourceName(e.target.value)}></input>
            <div class="inputText">Source Email: </div> 
                <input class="inputSource" onChange={(e) => setEmail(e.target.value)}></input>
                <button class="buttonGreen" type="button"
                 onClick={() => {
                    handleSubmit()
                }}>
                    ADD</button>
        </form>      
    )
}

export default Form;