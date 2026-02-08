const elements = [
    { name: "Hydrogen", symbol: "H", number: 1, mass: "1.008" },
    { name: "Helium", symbol: "He", number: 2, mass: "4.0026" },
    { name: "Lithium", symbol: "Li", number: 3, mass: "6.94" },
    { name: "Beryllium", symbol: "Be", number: 4, mass: "9.0122" },
    { name: "Boron", symbol: "B", number: 5, mass: "10.81" }
];

const table = document.getElementById("table");

elements.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.innerHTML = `<b>${el.symbol}</b><br>${el.number}`;

    div.addEventListener("mouseover", () => {
        document.getElementById("name").textContent = el.name;
        document.getElementById("symbol").textContent = el.symbol;
        document.getElementById("number").textContent = el.number;
        document.getElementById("mass").textContent = el.mass;
    });

    table.appendChild(div);
});
