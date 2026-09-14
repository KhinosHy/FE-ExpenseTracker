let expen = [];
let nextId = 1;

const keterinp= document.getElementById("keterangan");
const nominp = document.getElementById("nominal");
const list = document.getElementById("explist");

function nambah() {
    expen.push({
        id: nextId++,
        description: keterinp.value,
        nominal: Number(nominp.value)
    });
    keterinp.value = "";
    nominp.value = "";
    biji();
}
function hapus(id) {
    expen = expen.filter(item => item.id !== id);
    biji();
}
list.addEventListener("click", e => {
    if (e.target.matches("button")) {
        hapus(Number(e.target.dataset.id));
    }
});
function biji() {
    list.innerHTML = expen
        .map(item => `<li>${item.description} - Rp ${item.nominal} <button data-id="${item.id}">hapus</button></li>`)
        .join("");

    document.getElementById("tottung").innerHTML = expen.length;
    document.getElementById("totsil").innerHTML = expen.reduce((sum, item) => sum + item.nominal, 0);
}
biji();