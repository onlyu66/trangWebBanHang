//Validate Add Product Form:
function validateForm() {
  var image = document.getElementById("image").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var quantity = document.getElementById("quantity").value;
  var description = document.getElementById("description").value;

  if (name === "") {
    alert("Please enter a name!");
    return false;
  } else if (image === "") {
    alert("Please enter a image!");
    return false;
  } else if (price < 0) {
    alert("Price must be greater than 0!");
    return false;
  } else if (quantity < 0) {
    alert("Quantity must be greater than 0!");
    return false;
  }
  return true;
}

var manufactureList = {
  "Áo": [],
  "Jacket": [],
  "Quần": [],
  "Phụ kiện": [],
  "Balo - Túi": [],
  "Set": [],
  "Blazer": []
};

manufactureList

// var productList = [];

var manuafaturerTag = document.getElementById("manuafaturer_name");
for (var key in manufactureList) {
  manuafaturerTag.innerHTML += `<option value='${key}'>${key}</option>`;
}



// Show data:

function showData() {
  var productLists;
  if (localStorage.getItem("productLists") === null) {
    productLists = [];
  } else {
    productLists = JSON.parse(localStorage.getItem("productLists"));
  }

  var htmlProducts = "";
  productLists.forEach(function (element, index) {
    // let image = JSON.stringify(element.image).replace("C:\\fakepath\\","");
    htmlProducts += "<tr>";
    htmlProducts += "<td>" + JSON.stringify(element.image) + "</td>";
    htmlProducts += "<td>" + element.name + "</td>";
    htmlProducts += "<td>" + element.price + "</td>";
    htmlProducts += "<td>" + element.quantity + "</td>";
    htmlProducts += "<td>" + element.description + "</td>";
    htmlProducts +=
      `<td> 
                            <button onclick="deleteData(` +
      index +
      `)" class="btn btn-danger">Delete</button>
                            <button onclick="updateData(` +
      index +
      `)" class="btn btn-primary">Update</button>
                        </td>`;
    htmlProducts += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = htmlProducts;
}

document.onload = showData();

// Add product:

function addData() {
  if (validateForm() === true) {
    var image = document.getElementById("image").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var description = document.getElementById("description").value;

    var productLists;

    if (localStorage.getItem("productLists") === null) {
      productLists = [];
    } else {
      productLists = JSON.parse(localStorage.getItem("productLists"));
    }

    productLists.push({
      image: image,
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    });

    localStorage.setItem("productLists", JSON.stringify(productLists));
    showData();
    document.getElementById("image").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("description").value = "";
  }
}

// Delete product:

function deleteData(index) {
  var productLists;
  if (localStorage.getItem("productLists" === null)) {
    productLists = [];
  } else {
    productLists = JSON.parse(localStorage.getItem("productLists"));
  }

  productLists.splice(index, 1);
  localStorage.setItem("productLists", JSON.stringify(productLists));
  showData();
}

// Update product:
function updateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var productLists;
  if (localStorage.getItem("productLists" === null)) {
    productLists = [];
  } else {
    productLists = JSON.parse(localStorage.getItem("productLists"));
  }
  // document.getElementById("image").value = productLists[index].image;
  document.getElementById("name").value = productLists[index].name;
  document.getElementById("price").value = productLists[index].price;
  document.getElementById("quantity").value = productLists[index].quantity;
  document.getElementById("description").value =
    productLists[index].description;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() === true) {
      productLists[index].image = document.getElementById("image").value;
      productLists[index].name = document.getElementById("name").value;
      productLists[index].price = document.getElementById("price").value;
      productLists[index].quantity = document.getElementById("quantity").value;
      productLists[index].description =
        document.getElementById("description").value;

      localStorage.setItem("productLists", JSON.stringify(productLists));
      showData();
      document.getElementById("image").value = "";
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("description").value = "";

      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
}
