fetch('user.json')
.then(function(response){
   return response.json();
})
.then(function(data){
    let cardContainer = document.getElementById('cardContainer');
    let output = "";
    for(let dataElement of data){
        output += `
        <div class="card-deck my-3">
        <div class="card card-elem" style="width: 18rem;">
         <img class="card-img-top" src='${dataElement.picture}' alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${dataElement.name}<br>Nationality-${dataElement.nat}</p>
            </div>
         </div>
     </div>
     `;
    }
    cardContainer.innerHTML = output;
})

  

 
