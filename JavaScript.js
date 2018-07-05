function add() {
    var z = document.getElementById("list");
    var y = document.getElementById("txtAdd");

    var l = document.createElement("li");

    if (y.value == "") { }

    else {
        l.setAttribute('id', y.value);
        l.appendChild(document.createTextNode(y.value));
        z.appendChild(l);
    }
}





function searchItem(event) {

    var filter = event.target.value.toLowerCase();
    var lis = document.getElementsByTagName('li');

    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].textContent;
        if (name.toLowerCase().indexOf(filter) !== -1)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}

var search = document.getElementById('txtSearch');
search.addEventListener('input', searchItem);