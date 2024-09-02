let result = '';
let aText = '';

updateView();
function updateView(){
    result = aText.charAt(0).toUpperCase() + aText.slice(1);
    document.getElementById('app').innerHTML = `
    <input type="text" oninput="aText=this.value" value="${aText}"/>
    <button onclick="textOutput()">Click Me</button>
    <div>After formatting: ${result}</div>
    <div>Before formatting: ${aText}</div>
`;
}

function textOutput(){
    updateView();
}