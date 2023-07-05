document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const recipeList = document.getElementById('recipe-list');
  const noResults = document.getElementById('no-results');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query !== '') {
      // Perform the API request using your existing code
      // ...

      // Assume 'recipes' is the array of recipes returned from the API
      displayRecipes(recipes);
    }
  });

  function displayRecipes(recipes) {
    recipeList.innerHTML = '';

    if (recipes.length > 0) {
      recipes.forEach((recipe) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h3>${recipe.title}</h3>
          <p>${recipe.instructions}</p>
        `;
        recipeList.appendChild(listItem);
      });

      noResults.style.display = 'none';
    } else {
      noResults.style.display = 'block';
    }
  }
});
