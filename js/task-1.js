const listCategories = document.querySelectorAll('#categories .item')
console.log(`Number of categories: ${listCategories.length}`)
listCategories.forEach(elem => {
    const category = elem.querySelector('h2').textContent;
    console.log(`Category: ${category}`)
    const elements = elem.querySelector('ul').children.length;
    console.log(`Elements: ${elements}`)
})