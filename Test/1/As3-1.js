const MOUNTAINS = [
    {name: "Killmanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vadserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocategetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  
  function buildTable(data) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach(mountain => {
      const row = document.createElement("tr");
      Object.values(mountain).forEach((value, index) => {
        const td = document.createElement("td");
        td.textContent = value;
        if (typeof value === "number") {
          td.style.textAlign = "right";
        }
        row.appendChild(td);
      });
      table.appendChild(row);
    });
  
    return table;
  }
  
  document.getElementById("mountains").appendChild(buildTable(MOUNTAINS));