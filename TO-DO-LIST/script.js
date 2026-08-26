const input=document.querySelector("#input-task");
const taskcontainer=document.querySelector(".task-container ul");
const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
if(input.value===""){
    alert("You must Write something");
}
else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    taskcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span);
}
input.value===""
savedata();
});
taskcontainer.addEventListener("click",(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedata();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
}
})
const savedata=()=>{
    localStorage.setItem("data",taskcontainer.innerHTML);
}
const showdata=()=>{
taskcontainer.innerHTML=localStorage.getItem("data");
}
showdata();