// search meals by first letter
const inputFirstLetter = () => {
    const input = document.getElementById("inputText").value;
    const singleChar = [...input];
    if (singleChar.length > 1) {
        document.getElementById('mealIngredientDiv').innerHTML = 'No results Found';
    }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchedResult(data.meals));
     document.getElementById("inputText").value = "";
}
// display searched results    
    const displaySearchedResult = meals => {
    const mealsDiv = document.getElementById("searchedMealList");
    mealsDiv.innerHTML = '';
    document.getElementById('mealIngredientDiv').innerHTML = '';
    meals.forEach( meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = 'myMealsDiv';
        const mealInfo = `
        <div onclick = "mealIngredient('${meal.strMeal}')">
        <img src = "${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        </div>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

// showing clicked meal ingredients
const mealIngredient = mealName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
    .then(response => response.json())
    .then(data => mealIngredientDetails(data.meals[0]));
 }
const mealIngredientDetails = meals => {
    const ingredientDiv =document.getElementById('mealIngredientDiv');
    ingredientDiv.innerHTML = `
        <img src = "${meals.strMealThumb}">
        <h3>${meals.strMeal}</h3>
        <h4>Ingredients</h4>
        <li>${meals.strIngredient1}</li>
        <li>${meals.strIngredient2}</li>
        <li>${meals.strIngredient3}</li>
        <li>${meals.strIngredient4}</li>
        <li>${meals.strIngredient5}</li>
        <li>${meals.strIngredient6}</li>
        <li>${meals.strIngredient7}</li>
        <li>${meals.strIngredient8}</li>
        <li>${meals.strIngredient9}</li>
        <li>${meals.strIngredient10}</li>
    `
}
