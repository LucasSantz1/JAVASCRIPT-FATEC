const form = document.getElementById('itemForm');
const itemList = document.getElementById('itemList');
let items = [];

// adicionar item ao array e exibir em ordem alfabética
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newItem = document.getElementById('item').value.trim();

    if (newItem !== "") {
        items.push(newItem);  
        items.sort();  
        displayItems();  
        document.getElementById('item').value = "";  
    }
});

// exibir os itens na lista
function displayItems() {
    itemList.innerHTML = '';  

    items.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}
