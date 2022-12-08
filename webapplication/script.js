var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["productId"] = document.getElementById("productId").value;
    formData["product"] = document.getElementById("product").value;
    formData["categoryName"] = document.getElementById("categoryName").value;
    formData["categoryId"] = document.getElementById("categoryId").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productId;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.categoryName;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.categoryId;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Update</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productId').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('categoryName').value = selectedRow.cells[2].innerHTML;
    document.getElementById('categoryId').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productId;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.categoryName;
    selectedRow.cells[3].innerHTML = formData.categoryId;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('productId').value = '';
    document.getElementById('product').value = '';
    document.getElementById('categoryName').value = '';
    document.getElementById('categoryId').value = '';
}