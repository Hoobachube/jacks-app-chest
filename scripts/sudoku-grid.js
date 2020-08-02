class SudokuGrid {
  constructor(gridId) {
    this.gridId = gridId;
    this.state = {
      selected: {
        x: -1,
        y: -1,
      },
    };
  }

  handleBoxClick(colNumber, rowNumber) {
    this.state.selected = { x: colNumber, y: rowNumber };
    this.render();
  }

  render() {
    const grid = document.getElementById(this.gridId);
    grid.innerHTML = "";

    for (let y = 0; y < 9; y++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let x = 0; x < 9; x++) {
        const box = document.createElement("div");
        box.classList.add("box", "box-hover");

        if (x == this.state.selected.x && y == this.state.selected.y) {
          box.classList.add("selected");
        }

        box.onclick = () => this.handleBoxClick(x, y);

        row.appendChild(box);
      }

      grid.appendChild(row);
    }
  }
}
