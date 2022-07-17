const personajes = {
  render: () => {
    const API =
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
    const container = document.getElementById("marvelsito");
    let contentHTML = "";

    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        for (const heroe of json) {
          let nombre = heroe.name;
          let espacio=" ";
          if (nombre.indexOf(" ") === -1){
            contentHTML += `
            <div class="personajesss col-md-2 text-center">
              <a target="_blank" href="https://www.google.com/search?q=personaje+${heroe.name}" class="nombrePerso">
                <img src="${heroe.images.lg}" alt="${heroe.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${heroe.name}</h3>
            </div>`;
          } else{

            nombre = nombre.replace(" ","-")
            contentHTML += `
            <div class="personajesss col-md-2 text-center">
              <a target="_blank" href="https://www.google.com/search?q=personaje+${heroe.name}" class="nombrePerso">
                <img src="${heroe.images.lg}" alt="${heroe.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${heroe.name}</h3>
            </div>`;
          }
        }
        container.innerHTML = contentHTML;

        const botonBuscar = document.getElementById("searchChamp");
        let datosBuscar = document.getElementById("inputChamp");

        datosBuscar.addEventListener("keyup", e =>{

          if(e.key =="Escape")e



          if (e.target.matches("#inputChamp")){
            document.querySelectorAll(".personajesss").forEach( personaje =>{

              personaje.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?personaje.classList.remove("filtro")
                :personaje.classList.add("filtro")
            })
          }
        })

      });
      
  },
};

personajes.render();

function datosChamp(a){
  alert(a)
}

const container = document.getElementById("marvelsito");
const containersito = document.getElementById("parteup");
const btnDark = document.getElementById("modedark")

btnDark.addEventListener('click', () => {

  let oscuro = localStorage.getItem('darkmode')

  if(oscuro === 'modo claro'){}

  console.log(btnDark.textContent)
  if(btnDark.textContent == 'Modo oscuro')
  {
    btnDark.textContent = 'Modo claro'
    btnDark.style.backgroundColor='white'
    btnDark.style.color='black'
    console.log(btnDark.textContent)
    container.style.backgroundColor='black';
    container.style.color='white';
    containersito.style.backgroundColor='black';
    containersito.style.color='white';

  }else{
  btnDark.textContent = 'Modo oscuro' 
  btnDark.style.backgroundColor='black'
  btnDark.style.color='white'
  console.log(btnDark.textContent)
  container.style.backgroundColor='tan';
  container.style.color='black';
  containersito.style.backgroundColor='tan';
  containersito.style.color='black';
}

localStorage.setItem('darkmode', btnDark.textContent)

})