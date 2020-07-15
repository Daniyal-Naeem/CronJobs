var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Subject"] = document.getElementById("Subject").value;
    formData["Repeat"] = document.getElementById("Repeat").value;
    formData["Start"] = document.getElementById("Start").value;
    formData["Description"] = document.getElementById("Description").value;
    formData["Room"] = document.getElementById("Room").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Subject;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Repeat;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Start;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Description;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Room;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Subject").value = "";
    document.getElementById("Repeat").value = "";
    document.getElementById("Start").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("Room").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Subject").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Repeat").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Start").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Description").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Room").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Subject;
    selectedRow.cells[1].innerHTML = formData.Repeat;
    selectedRow.cells[2].innerHTML = formData.Start;
    selectedRow.cells[3].innerHTML = formData.Description;
    selectedRow.cells[4].innerHTML = formData.Room;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Subject").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}