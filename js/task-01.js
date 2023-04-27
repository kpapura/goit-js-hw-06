const itemsLi = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemsLi.length}`);

itemsLi.forEach((heading) => {
    let elements = heading.querySelector('ul')
    console.log(`Category: ${heading.querySelector('h2').textContent} 
    Elements: ${elements.childElementCount}`);
})