window.onload = function() {
    fetch("https://randomuser.me/api/?results=5").then(resultado => {
       return resultado.json()
   }).then(response => {
       for (i = 0; i < 5; i++) {
           console.log(response)
           document.getElementById("foto" + i).setAttribute("src", response.results[i].picture.large);
           document.getElementById("nome" + i).innerHTML = response.results[i].name.first + " " + response.results[i].name.last;
           document.getElementById("localizacao" + i).innerHTML = response.results[i].location.timezone.description;
        //    let endereco =  response.results[i].location.city + ", " + response.results[i].location.country;
        //    document.getElementById("localizacao" + i).innerHTML = endereco
       }
   })
}