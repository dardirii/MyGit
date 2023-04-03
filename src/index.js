class Table {
    constructor(init) {
      this.init = init;
    }
  
    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        console.log(d)
        open += `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
          </tr>
        `;
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
  }
  
  const table = new Table({
    columns: ["Tittle", "Description"],
    data: [
      ["iPhone 9", "An apple mobile which is nothing like apple"],
      ["iPhone X", "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip"]
      ["Huawei P30", "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK"]
    ]
  });
  const app = document.getElementById("app");
  table.render(app);
  