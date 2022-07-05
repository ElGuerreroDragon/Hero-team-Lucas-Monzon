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
            <div class="col-md-2 text-center">
              <a onclick=datosChamp("${nombre}") target="_blank" class="nombrePerso">
                <img src="${heroe.images.lg}" alt="${heroe.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${heroe.name}</h3>
            </div>`;
          } else{

            nombre = nombre.replace(" ","-")
            contentHTML += `
            <div class="col-md-2 text-center d-inline-block">
              <a onclick=datosChamp("${nombre}") target="_blank" class="nombrePerso">
                <img src="${heroe.images.lg}" alt="${heroe.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${heroe.name}</h3>
            </div>`;
          }
        }
        container.innerHTML = contentHTML;
      });
      
  },
};

personajes.render();

function datosChamp(a){
  alert(a)
}