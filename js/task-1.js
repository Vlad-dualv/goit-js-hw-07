const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    console.log(`Category Name: ${categoryName}`);
    const categoriesCount = category.querySelectorAll("li");
    console.log(`Elements: ${categoriesCount.length}`);
})

