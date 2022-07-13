const personajes = {
  render: () => {
    const API =
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
    const container = document.getElementById("selectChamplist");
    let contentHTML = "";

    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        for (const heroe of json) {
            contentHTML += `
            <option class="text-center" id="champs" draggable="true">
              <h3 class="shadow-lg card-title">${heroe.name}</h3>
              </div>
            </option>`;
        }

        
        container.innerHTML = contentHTML;
        const btnSelectChamp = document.getElementById("btnSelect")
        const divTeam = document.getElementById("elteam")

        btnSelectChamp.addEventListener("click", e =>{

          console.log(divTeam.children.length)

          if(divTeam.children.length > 2){
            alert("no se pueden agregar mas de 3 tonto")
          } else{

            for(datos of json){
              if(datos.name === container.value){
                console.log(datos)
                let divChamp = document.createElement("div")
                divChamp.setAttribute.class="row";
                divChamp.innerHTML=`<img class=" col-2 m-3" src="${datos.images.sm}"></img><p class="col-2">${datos.powerstats.intelligence}</p>`;
                divTeam.appendChild(divChamp)
              }
            }
          
          
        }
        })
      }); 
  },
};

personajes.render()


const nombreEquipo = document.getElementById("nombreteam")
const nombreacept = document.getElementById("aceptnameteam")
const titulo = document.getElementById("tituloteam")
const divname= document.createElement("div")

nombreacept.addEventListener("click", () =>{
  divname.innerHTML=`<h4 class="text-center fw-bold">${nombreEquipo.value.toUpperCase()}</h4>`
  titulo.appendChild(divname)
} )




