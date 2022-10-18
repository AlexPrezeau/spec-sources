
function List({emailList, handleDelete}) {
    return(
       <body>
        {emailList.map((person, idx) => (
            <ListItem index={idx} source={person.source} sourceEmail={person.sourceEmail} handleDelete={handleDelete}/>
        ))}
       </body>
    )
}

export default List;

function ListItem({index, source, sourceEmail, handleDelete}) {

    return(
        <div class="listItem">
        <div class="listName">{index + 1} </div>
        <div class="listName centeredText">{source}</div>
        <div class="listEmail centeredText">{sourceEmail}</div> 
        <button class="buttonRed" onClick={() => handleDelete(index)}>DELETE</button>
    </div>
    )

}