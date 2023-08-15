//Validate Add Product Form:
function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var description = document.getElementById("description").value;

    if(name === "") {
        alert("Please enter a name!");
        return false;
    }
    if(age < 0) {
        alert("Price must be greater than 0!");
        return false;
    } else if(address === "") {
        alert("Please enter user address!");
    }
    return true;
}

// show data:

function showData() {
    var userLists;
    if(localStorage.getItem("userLists") === null) {
        userLists = [];
    } else {
        userLists = JSON.parse(localStorage.getItem("userLists"));
    }

    var htmlProducts = "";
    userLists.forEach(function(element, index) {
        htmlProducts += "<tr>";
        htmlProducts += "<td>" + element.name + "</td>"
        htmlProducts += "<td>" + element.age + "</td>"
        htmlProducts += "<td>" + element.address + "</td>"
        htmlProducts += "<td>" + element.description + "</td>"
        htmlProducts += `<td> 
                            <button onclick="deleteData(`+ index +`)" class="btn btn-danger">Delete</button>
                            <button onclick="updateData(`+ index +`)" class="btn btn-primary">Update</button>
                        </td>`
        htmlProducts += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = htmlProducts;
}

document.onload = showData();

//add data:

function addData() {
    if(validateForm() === true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var description = document.getElementById("description").value;

        var userLists;

        if(localStorage.getItem("userLists") === null) {
            userLists = [];
        } else {
            userLists = JSON.parse(localStorage.getItem("userLists"));
        }

        userLists.push({
            name: name,
            age: age,
            address: address,
            description: description
        });

        localStorage.setItem("userLists", JSON.stringify(userLists));
        showData();

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("description").value = "";
    }
}

// delete Data:

function deleteData(index) {
    var userLists;
    if(localStorage.getItem("userLists" === null)) {
        userLists = [];
    } else {
        userLists = JSON.parse(localStorage.getItem("userLists"));
    }

    userLists.splice(index, 1);
    localStorage.setItem("userLists", JSON.stringify(userLists));
    showData();
}

// Update Data:

function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var userLists;
    if(localStorage.getItem("userLists" === null)) {
        userLists = [];
    } else {
        userLists = JSON.parse(localStorage.getItem("userLists"));
    }

    document.getElementById("name").value = userLists[index].name;
    document.getElementById("age").value = userLists[index].price;
    document.getElementById("address").value = userLists[index].address;
    document.getElementById("description").value = userLists[index].description;

    document.querySelector("#Update").onclick = function() {
        if(validateForm() === true) {
            userLists[index].name = document.getElementById("name").value;
            userLists[index].age = document.getElementById("age").value;
            userLists[index].address = document.getElementById("address").value;
            userLists[index].description = document.getElementById("description").value;

            localStorage.setItem("userLists", JSON.stringify(userLists));
            showData();

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("description").value = "";
            
            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}