let wrapper = document.querySelector("#wrapper");
let button = document.getElementById('submit');
let searchTerm = "";
let urlBase = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=";
let container = document.getElementById("container");
let searchInput = document.querySelector('input[name = "search"]');

searchInput.addEventListener('search', function (event){
  console.log(event.target.value);
  getSearch = event.target.value
})
  fetch(urlBase + "?q=" + searchTerm)
  .then(function(response){
    console.log(response);
    response.json()
    .then(function(data) {
      console.log(data);

      let recipes = data.results;
      for (i=0; i<8; i++) {
        let recipe = recipes [i];
        function myRecipes(data) {

           let results = `
          <div class= 'recipeBox'>
             <div class= "recipeThumbnail">
               <img src='${recipe.thumbnail}' alt=""></img>
                </div>
                 <div class="recipeLink">
                    <a href= '${recipe.href}' > '${recipe.title}'</a>
                 </div>
           </div>
           `

           return results;

        }
        let addingRecipes = myRecipes(data);
        container.innerHTML += addingRecipes;

}
    })
  })
