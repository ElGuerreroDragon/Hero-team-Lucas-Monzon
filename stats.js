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
        <tr class="img-thumbnail">
        <td> <img src="${heroe.images.sm}" alt="${heroe.name}" heigth="10px"></td>
        <td>${heroe.id}</td>
        <td>${heroe.name}</td>
        <td>${heroe.powerstats.intelligence}%</td>
        <td>${heroe.powerstats.strength}%</td>
        <td>${heroe.powerstats.speed}%</td>
        <td>${heroe.powerstats.durability}%</td>
        <td>${heroe.powerstats.power}%</td>
        <td>${heroe.powerstats.combat}%</td>
        <th>`
      }
        container.innerHTML = contentHTML;
      });     
  },
};

champs.render();

function datosChamp(a){
  alert(a)
}

//<div class="col-md-12 text-center">
//<a onclick=datosChamp("") target="_blank" class="nombrePerso">
//</div>  <img src="${heroe.images.lg}" alt="${heroe.name}" width="100" height="40" class="img-thumbnail">
//</img></a>
//<h3 class="title">${heroe.name}</h3>
//</div>`;