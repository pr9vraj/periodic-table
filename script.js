fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
  .then(res => res.json())
  .then(data => {
    const elements = data.elements;
    const table = document.getElementById("table");

    elements.forEach(el => {
      const div = document.createElement("div");
      div.className = "element";
      div.innerHTML = `<b>${el.symbol}</b><br>${el.number}`;

      div.addEventListener("mouseover", () => {
        document.getElementById("name").textContent = el.name;
        document.getElementById("symbol").textContent = el.symbol;
        document.getElementById("number").textContent = el.number;
        document.getElementById("mass").textContent = el.atomic_mass;
      });

      table.appendChild(div);
    });
  });
