function makeRequest(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}

makeRequest('GET', 'https://fakestoreapi.com/products/categories', function (categories) {
    const categoriesDiv = document.querySelector('.categories');
    categories.forEach(function (category) {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.addEventListener('click', function () {
            makeRequest('GET', `https://fakestoreapi.com/products/category/${category}`, function (products) {
                displayProducts(products);
            });
        });
        categoriesDiv.appendChild(categoryElement);
    });
});


function displayProducts(products) {
    const productsDiv = document.querySelector('.products');
    const productInfoDiv = document.querySelector('.product__info');
    
    productsDiv.innerHTML = '';
    productInfoDiv.innerHTML = '';

    products.forEach(function (product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.textContent = product.title;
        productElement.addEventListener('click', function () {
            displayProductInfo(product);
        });
        productsDiv.appendChild(productElement);
    });
}

function displayProductInfo(product) {
    const productInfoDiv = document.querySelector('.product__info');
    productInfoDiv.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = product.title;

    const price = document.createElement('p');
    price.textContent = `Ціна: $${product.price}`;

    const description = document.createElement('p');
    description.textContent = `Опис: ${product.description}`;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Придбати';
    buyButton.addEventListener('click', function () {
        alert('Товар придбано!');
        
        document.querySelector('.products').innerHTML = '';
        document.querySelector('.product__info').innerHTML = '';
    });

    productInfoDiv.appendChild(title);
    productInfoDiv.appendChild(price);
    productInfoDiv.appendChild(description);
    productInfoDiv.appendChild(buyButton);
}