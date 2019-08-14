let arrayProducts = ["áo", "quần", "váy", "giày"];

function addData(array) {
    let inputData = document.getElementById("inputData").value;
    array.push(inputData);
    displayProducts(array);
    inputData = "";

}

displayProducts(arrayProducts);

function displayProducts(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
        html += '<div id = "' + i + '">';
        html += data[i];
        html += '</div>';
        html += '<span id = "' + i + '">';
        html += "<button id='" + i + "' onclick='editProducts(this,arrayProducts)' >Edit</button>";
        html += '</span>';
        html += '<span id = "' + i + '">';
        html += "<button id='" + i + "' onclick='deleteProducts(this,arrayProducts)' >Delete</button>";
        html += '</span>';

        document.getElementById("display").innerHTML = html;
    }
}

function deleteProducts(location, data) {
    let productsLocation = parseInt(location.getAttribute("id"));
    data.splice(productsLocation, 1);
    displayProducts(data);

}

function editProducts(location, data) {
    let nameProducts = document.getElementById("inputData").value;
    let productsLocation = parseInt(location.getAttribute("id"));
    data[productsLocation] = nameProducts;
    displayProducts(data);

}
