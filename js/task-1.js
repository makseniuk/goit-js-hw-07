const categoriesList = document.querySelector("#categories");
const categoriesItem = document.querySelector(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItem.forEach((categoriesItem) => {
    const categoriesTitle = categoriesItem.querySelector('h2').textContent;

    const categoryElements = categoriesItem.querySelectorAll('ul li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of elements: ${categoryElements.length}`);
  console.log('----------------------');
})