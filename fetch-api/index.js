import data from "./data.js";
const user= document.getElementById("user-container")
const users= JSON.parse(data)


for (let i=0; i<users.length; i++){
const card = document.createElement("div-container")
card.innerHTML =` 


<div id="card-container">
<div>
<img src="${users[i].picture.large}"alt ${users[i].name.first}  ${users[i].name.last}/>
<h2> ${users[i].name.first}  ${users[i].name.last}</2>
</div>
<p>${users[i].location.street.name} ${users[i].location.street.number}</p>
  
   </div>
   `
   user.appendChild(card)

}

user.addEventListener("click", ()=>{
console.log("hola")
})
