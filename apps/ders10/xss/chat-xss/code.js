let msgCounter = 0;
let messages = null;

const sendMessage = () => {
    const author = document.getElementById("nameInputId").value
    const text = document.getElementById("msgInputId").value
    const msg = {id:msgCounter,author,text}

    if(!messages) {
        messages = [msg]
    }else{
        messages = [...messages,msg]
    }
    msgCounter = msgCounter+1;
    document.getElementById("msgInputId").value = "";
    displayMessages();
}

const displayMessages = () => {

    let msgDiv = "<div>";
    for(let i=0; i<messages.length; i++){
        const m = messages[i];
        //UYARI: XSS'e sebep olabilir!!!
        msgDiv += "<p>" + m.author + ": " + m.text + "</p>";
    }

    msgDiv += "</div>";

    document.getElementById("msgDiv").innerHTML = msgDiv;
}
