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
          let nombre = heroe.name;
            contentHTML += `
            <div class="cartita col-md-2 m-0 p-0 card bg-dark text-white text-center">
              <a onclick=datosChamp("${nombre}") target="_blank" class="nombrePerso">
                <img src="${heroe.images.sm}" class="card-img" alt="${heroe.name}">
              </a>
              <div class="card-img-overlay">
              <h3 class="shadow-lg card-title">${heroe.name}</h3>
              </div>
            </div>`;
        }
        container.innerHTML = contentHTML;
      }); 
  },
};

personajes.render()
