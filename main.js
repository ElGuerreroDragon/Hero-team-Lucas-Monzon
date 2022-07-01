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
          let nombre = heroe.biography.fullName;
          contentHTML += `
      <div class="col-md-2 text-center">
        <a  target="_blank" id="nombrePerso">
          <img src="${heroe.images.lg}" alt="${heroe.name}" class="img-thumbnail">
        </a>
        <h3 class="title">${heroe.name}</h3>
      </div>`;
        
        console.log(nombre)
        }
        container.innerHTML = contentHTML;
      });
      
  },
};

personajes.render();

