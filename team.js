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




