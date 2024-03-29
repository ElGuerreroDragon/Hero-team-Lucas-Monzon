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
        let heroesElegidos = []

        btnSelectChamp.addEventListener("click", e =>{
          if(divTeam.children.length > 2){
            swal("Lo sentimos", "solo se pueden agregar hasta 3 heroes", "error");
          } else{
            
            for(datos of json){
              if(datos.name === container.value){
                let personaje = new Personajes (datos.name,datos.images.sm)
                console.log(datos.name, datos.images.sm)
                heroesElegidos.push(personaje)
                console.log(heroesElegidos)
                localStorage.setItem("Elegidos", JSON.stringify(heroesElegidos))
                let divChamp = document.createElement("div")
                divChamp.setAttribute.class="row";
                let html=`<div class="selectChampTeam" style="display:flex;"><img class="col-2 m-1 w-10" src="${datos.images.sm}"></img><p style="text-align:center;flex-grow:1" class="col-3"></br>NOMBRE: ${datos.name} </br></br> Inteligencia: ${datos.powerstats.intelligence}</br>Fuerza: ${datos.powerstats.strength} </br>Velocidad: ${datos.powerstats.speed} </br>Durabilidad: ${datos.powerstats.durability} </br>Poder: ${datos.powerstats.power} </br>Combate: ${datos.powerstats.combat}</p></div>`
                divChamp.innerHTML=html;
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




class Personajes{
  constructor(nombre, imagen){
    this.nombre=nombre;
    this.imagen=imagen;
  }
}


const btnDark = document.getElementById("modedark")
let teampage = document.getElementById('myteam')

btnDark.addEventListener('click', () => {


  let modo;

  console.log(btnDark.textContent)
  if(btnDark.textContent == 'Modo oscuro')
  {
    btnDark.textContent = 'Modo claro'
    btnDark.style.backgroundColor='white'
    btnDark.style.color='black'
    console.log(btnDark.textContent)
    teampage.style.backgroundColor='black';
    teampage.style.color='white';
    modo = 0

  }else{
  btnDark.textContent = 'Modo oscuro' 
  btnDark.style.backgroundColor='black'
  btnDark.style.color='white'
  console.log(btnDark.textContent)
  teampage.style.backgroundColor='tan';
  teampage.style.color='black';
  modo = 1
}


localStorage.setItem('darkmode', modo)

})


let oscuro = localStorage.getItem('darkmode')

if(oscuro === '0'){
  teampage.style.backgroundColor='black'
  teampage.style.color='white'
  btnDark.textContent = 'Modo claro'
  btnDark.style.backgroundColor='white'
  btnDark.style.color='black'
  teampage.style.backgroundColor='black';
  teampage.style.color='white';
}else{
  btnDark.textContent = 'Modo oscuro' 
  btnDark.style.backgroundColor='black'
  btnDark.style.color='white'
  teampage.style.backgroundColor='tan';
  teampage.style.color='black';
}