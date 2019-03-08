function saveData() {
    var location = document.getElementById("location").value;
    //document.getElementById("location").value = location;
    sessionStorage.setItem("loc", location);

    var destination = document.getElementById("destination").value;
    //document.getElementById("destina").value = destination;
    sessionStorage.setItem("dest", destination);
}
