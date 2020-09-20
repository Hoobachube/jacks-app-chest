class SudokuGrid {
  constructor(gridId) {
    this.gridId = gridId;
    this.state = {
      selected: {
        x: -1,
        y: -1,
      },
      grid: [],
    };
  }

  //creating the main grid and internal grid lines.
  handleBoxClick(colNumber, rowNumber) {
    this.state.selected = { x: colNumber, y: rowNumber };
    this.render();
  }

  handleButtonClick(i) {
    const exsistingItem = this.state.grid.find(
      (item) =>
        item.x == this.state.selected.x && item.y == this.state.selected.y
    );

    if (exsistingItem) {
      exsistingItem.value = i;
    } else {
      this.state.grid.push({
        x: this.state.selected.x,
        y: this.state.selected.y,
        value: i,
      });
    }

    this.render();
  }

  renderButtons() {
    for (let i = 0; i < 9; i++) {
      const nb1 = document.createElement("button");
      nb1.innerHTML = i + 1;
      nb1.classList.add("btn", "btn-primary", "sudoku-button");
      nb1.onclick = () => this.handleButtonClick(i + 1);
      if (this.state.selected.x == -1) {
        nb1.disabled = true;
      }
      document.getElementById(this.gridId).appendChild(nb1);
    }
  }

  renderCells() {
    const grid = document.getElementById(this.gridId);
    grid.innerHTML = "";

    for (let y = 0; y < 9; y++) {
      const row = document.createElement("div");
      row.classList.add("sudoku-row");

      for (let x = 0; x < 9; x++) {
        const box = document.createElement("div");
        box.classList.add("box", "box-hover");

        if (x % 3 === 0) {
          box.classList.add("bl-5");
        }

        if (x === 8) {
          box.classList.add("br-5");
        }

        if (y % 3 === 0) {
          box.classList.add("bt-5");
        }

        if (y === 8) {
          box.classList.add("bb-5");
        }

        if (x == this.state.selected.x && y == this.state.selected.y) {
          box.classList.add("selected");
        }

        if (this.state.grid && this.state.grid.length > 0) {
          const gridItem = this.state.grid.find((g) => g.x == x && g.y == y);
          if (gridItem) {
            box.innerHTML = gridItem.value;
          }
        }

        box.onclick = () => this.handleBoxClick(x, y);

        row.appendChild(box);
      }

      grid.appendChild(row);
    }
  }

  renderSpace() {
    var space = document.createElement("div");
    space.classList.add("space");
    document.getElementById(this.gridId).appendChild(space);
  }

  render() {
    this.renderCells();

    this.renderSpace();

    this.renderButtons();
  }
}
