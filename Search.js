function SearchVia() {
    var x = document.getElementById("Search_select").value;
    if (x === "") {
        document.getElementById("para").innerHTML = "Enter:";
        document.getElementById("ser").value = "";
        document.getElementById("ser").disabled = true;
        document.getElementById("but").disabled = true;
    } else {
        document.getElementById("para").innerHTML = "Enter " + x + ":";
        document.getElementById("ser").disabled = false;
        document.getElementById("but").disabled = false;
    }
}

function Search() {
    var x = document.getElementById("ser").value;
    if (x === "") {
        document.getElementById("Output").innerHTML = "TextBox is Empty";
    } else {
        document.getElementById("Output").innerHTML = "No Students Found";
        document.getElementById("ser").value = "";
    }
}