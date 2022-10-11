const emailList = [{source: "Presbo", sourceEmail: "presbo@columbia.edu"},
                    {source: "John Jay Mouse", sourceEmail: "mouse@columbia.edu"},
                    {source: "Water Bottle Man", sourceEmail: "flipper@columbia.edu"}]

function List() {
    return(
       <body>
        {emailList.map((person, idx) => 
            (<ListItem index={idx+1} source={person.source} sourceEmail={person.sourceEmail}/>
        ))}
       </body>
    );
}

export default List;

function ListItem({index, source, sourceEmail}) {

    return(
        <div class="listItem">
        <div class="listName">{index} </div>
        <div class="listName centeredText">{source}</div>
        <div class="listEmail centeredText">{sourceEmail}</div> 
        <button class="buttonRed">DELETE</button>
    </div>
    );

}