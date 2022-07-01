const champs = {
  render: () => {
    const API =
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
    const container = document.getElementById("stats");
    let contentHTML = "";

    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        for(heroe of json){
        contentHTML += `
        <div class="col-md-2 text-center">
          <a onclick=datosChamp("") target="_blank" class="nombrePerso">
            <img src="${heroe.images.lg}" alt="${heroe.name}" class="img-thumbnail">
          </a>
          <h3 class="title">${heroe.name}</h3>
        </div>`;
      }
        container.innerHTML = contentHTML;
      });
      
  },
};

champs.render();

function datosChamp(a){
  alert(a)
}
