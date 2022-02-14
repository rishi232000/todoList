const ip=document.querySelector("#textarea");
const btn1=document.querySelector("#btn1");


function add(){
    let note=ip.value;
    if(note==""){
        return alert("no job found to add in list");
    }

    const listConst=document.querySelector(".row");
    var div=document.createElement("div");
    div.setAttribute("class","col-sm-6");

    var card=document.createElement("div");
    card.setAttribute("class","card");

    var cardBody=document.createElement("div");
    cardBody.setAttribute("class","card-body");

    var pTag=document.createElement("p");
    pTag.setAttribute("class","card-text");

    var pText=document.createTextNode(note);

    listConst.appendChild(div);
    div.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(pTag);
    pTag.appendChild(pText);


     //remove btn

     var removeToDo=document.createElement("button");
     removeToDo.style="border-radius:15px;height:5vh;";
     removeToDo.setAttribute("class","btn-danger");
     var btnText=document.createTextNode("Remove");
     removeToDo.appendChild(btnText);

     cardBody.appendChild(removeToDo);
     

 
     removeToDo.addEventListener("click",function(){
         //var sibling=removeToDo.previousElementSibling;
         //removeToDo.style.display="none";
 
         //sibling.style.display="none";

         div.remove();
     })
 
     ip.value="";
 }