let wrapper = document.querySelector("#wrapper");
let button = document.getElementById('submit');

var form = document.querySelectorAll('form')[0]
let baseUrl = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/";
// let container = document.getElementById("container");
// let searchInput = document.querySelector('input[name = "search"]');

form.addEventListener("submit", function(event) {
  event.preventDefault()
  console.log(this);
  const nameInputValue = event.target.querySelector('input[name="search"]').value
  // searchTerm = document.getElementById("search").value;
  // getSearchResults(nameInputValue).then(function(results) {
  //   console.log(results)
  //   event.target.querySelector('input[name="search"]').value = ''
  getSearchResults(nameInputValue).then(function(results) {
    console.log(results)
    event.target.querySelector('input[name="search"]').value = ''
    // for (i = 0; i < 8; i++) {
    //   let recipe = recipes[i];
    //   function myRecipes(recipe)
    //
    //
    // let html = `
    //    <div class= 'recipeBox'>
    //       <div class= "recipeThumbnail">
    //          <img src='${recipe.thumbnail}' alt=""></img>
    //           </div>
    //            <div class="recipeLink">
    //               <a href= '${recipe.href}' '${recipe.title}'</a>
    //            </div>
    //     </div>
    //     `;
    // console.log(recipe);
  })
})

    function getSearchResults(searchTerms) {
      return fetch(`${baseUrl}?q=${searchTerms}`).then(function(response) {
        return response.json()
    })
  }


     const searchInput = document.querySelector('input[name="search"]')

     searchInput.addEventListener('search', function(event) {
       console.log(event.target.value)
     })

    //   // fetch(baseUrl+ '?q='+ searchTerm)
    //   //  console.log(baseUrl,'?q=', searchTerm)
    //   // .then( function(response) {
    //   //
    //   //   response.json().then(function(data) {
    //   //     let recipes = data.results;
    //
    //
    //
    //    console.log(this);
    //    const nameInputValue = event.target.querySelector('input').value
    //
    //    getSearchResults(nameInputValue).then(function(results) {
    //      console.log(results)
    //         for (i = 0; i < 8; i++) {
    //         let recipe = recipes[i];
    //         function myRecipes(recipe) {
    //
    // let html = `
    //       <div class= 'recipeBox'>
    //          <div class= "recipeThumbnail">
    //             <img src='${recipe.thumbnail}' alt=""></img>
    //              </div>
    //               <div class="recipeLink">
    //                  <a href= '${recipe.href}' '${recipe.title}'</a>
    //               </div>
    //        </div>
    //         `;
    // console.log(recipe);

    // let addingRecipes = myRecipes(recipe);
    //  container.innerHTML += addingRecipes;
    //
    //
    //       }
    //     })
    //   })
    // })
    //

    // function getSearchResults(searchTerms) {
    //   return fetch(`${baseUrl}${searchTerms}`).then(function(data) {
    //     return data.json();
    //   })
    //   const searchInput = document.querySelector('input[name="search"]')
    //
    //   searchInput.addEventListener('search', function(event) {
    //     console.log(event.target.value);
