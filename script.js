const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector("#btn");

button.addEventListener('click', (e)=>{
    if(inputBox.value === ""){
        alert("You have to add Task first!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let cross = document.createElement("cross");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    inputBox.value = "";
    saveData();
})
listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "CROSS"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();