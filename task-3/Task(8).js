
let inputText=document.getElementById("inputText");
let addButton=document.getElementById("addButton");
let listTask=document.getElementById("listTask");

let arr = JSON.parse(localStorage.getItem("task")|| []); //||[]empty arr

for(let i= 0;i<arr.length;i++){

    listTask.innerHTML+="<p>" + arr[i]+
    "<button onclick='deleteTask("+ i +")'>Delete</button>"+"</p>";  
    
    //عشان نعرف قيمه الرقم 



}

addButton.onclick=function(){

 let task = inputText.value ;
 arr.push(task);

 localStorage.setItem("task",JSON.stringify(arr));

 listTask.innerHTML +=
        "<p>" + task +
        "<button onclick='deleteTask(" + (arr.length - 1) + ")'>Delete</button>" +
        "</p>";

        inputText.value="";

}
inputText.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addButton.click();
    }

});

function deleteTask(index){
    arr.splice(index,1);

    localStorage.setItem("task",JSON.stringify(arr));// هون المهمه نحذفت من الlocal
    listTask.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {

        listTask.innerHTML +=
            "<p>" + arr[i] +
            "<button onclick='deleteTask(" + i + ")'>Delete</button>" +
            "</p>";

    }

}




