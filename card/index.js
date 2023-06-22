 const container=document.getElementById("div-container");
 const url="https://apisimpsons.fly.dev/api/personajes?limit=30&page=11 ";
let aaa=`https://static.wikia.nocookie.net/walkingdead/images/5/53/Season_nine_rick_grimes.png/revision/latest/scale-to-width-down/350?cb=20181029175100`;
function MyFunction(url){
   const card=document.createElement("card");
  fetch("https://apisimpsons.fly.dev/api/personajes?limit=30&page=11")
  .then(response => response.json())
  .then(datos =>datos.docs.forEach(
    datos => {
  card.innerHTML+=`
  <div class="hola">
<img src="${datos.Imagen}"/>
<h1>${datos.Nombre}</h1>

 
</div>
`   
 container.appendChild(card) 

}//<h2>Ocupación: ${datos.Ocupacion}</h2>   <h2>Estado: ${datos.Estado}</h2> 
))
.catch((error)=>{console.log("error de conexion")})}


/**/
 MyFunction()
