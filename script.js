expen = [];
idlnjt = 1;

function nambah() {
    desc = document.getElementById("description").value;
    nominal = document.getElementById("nominal").value;
    data = {
        id: idlnjt,
        description: desc,
        nominal: Number(nominal)
    };
    idlnjt = idlnjt + 1;
    expen.push(data);
    document.getElementById("description").value = "";
    document.getElementById("nominal").value = "";
    biji();
}
function hapus(id) {
    hasilFilter = [];
    for (i = 0; i < expen.length; i++) {
        if (expen[i].id != id) {
            hasilFilter.push(expen[i]);
        }
    }
    expen = hasilFilter;
    biji();
}
function biji() {
    list = document.getElementById("expenseList");
    list.innerHTML = "";
    total = 0;
    for (i = 0; i < expen.length; i++) {
        total = total + expen[i].nominal;
        li = document.createElement("li");
        li.innerHTML =
            expen[i].description +" - Rp " +expen[i].nominal +
            " <button onclick='hapus("+expen[i].id +")'>hapus</button>";
        list.appendChild(li);
    }
    document.getElementById("totalCount").innerHTML = expen.length;
    document.getElementById("totalAmount").innerHTML = total;
}
biji();