
const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
/* creating a variable for the input box
and the list container */

function addTask(){
/*creating function to add task to the list*/
    if(inputBox.value === ''){
        alert("Task must not be empty!");
    }
    /*if input value is empty error message*/
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    /*otherwise create list element that equals the input box value
    adds the list item and the "delete" button */
    inputBox.value = "";
    /*makes input box blank again*/
    saveData();
    /*calls the function saveData so when page is refreshed the tasks remain*/
}

/*adding event listeners*/
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    /*if list item is clicked css will be changed to "checked" class name*/
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    /*if span item is checked list item will be removed*/
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
/*saving data from list container into local storage into variable named data*/

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
/*showing the data*/
showTask();