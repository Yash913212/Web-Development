function grid(){
   const rows = document.getElementById("rows").value;
   const cols = document.getElementById("cols").value;
   const grid = document.getElementById("grid");
    grid.innerHTML = ""; 

   const table = document.createElement("table");
    table.setAttribute("border", "1");
    table.setAttribute("cellpadding", "10");
    table.setAttribute("cellspacing", "0");

    for(let i=1;i<=rows;i++){
        const tr = document.createElement("tr");
        for(let j=1;j<=cols;j++){
            const td = document.createElement("td");
            tr.appendChild(td);
            td.setAttribute("style", "border: 1px solid black; width: 50px; height: 50px; text-align: center;");
        }
        table.appendChild(tr);
    }
    grid.appendChild(table);
}