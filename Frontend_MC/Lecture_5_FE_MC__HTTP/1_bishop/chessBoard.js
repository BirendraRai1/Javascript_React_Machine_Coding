// if we are building a chessboard the first function is to build init function
//This window event is called when all the html and css part are done
window.addEventListener("load", function () {
  let table = document.querySelector("#table");
  // chess grid creation
  for (let ri = 0; ri < 8; ri++) {
    let tr = document.createElement("tr");
    let white = ri % 2 == 0 ? true : false;
    // cell loop
    for (let ci = 0; ci < 8; ci++) {
      let cell = document.createElement("td");
      cell.setAttribute("class", `box ${white == true ? "white" : "black"}`);
      // cell.innerText = `${ri}-${ci}`;
      cell.setAttribute("data-index", `${ri}-${ci}`);
      tr.appendChild(cell);
      white = !white;
    }
    table.appendChild(tr);
  }

  let boxesArr = document.querySelectorAll(".box");
  // how to indentify when someone hovers the cell
  table.addEventListener("mouseover", function (e) {
    console.log("e.target is ", e.target);
    //To get we have to use e.target.dataset.index
    //To set it we have to use cell.setAttribute("data-index",${ri}-${ci})
    console.log(e.target.dataset.index);
    let dataIndex = e.target.dataset.index;
    let [cRi, cCi] = e.target.dataset.index.split("-");
    // remove color from every  box;
    for (let i = 0; i < boxesArr.length; i++) {
      boxesArr[i].classList.remove("yellow");
    }
    /****************marking the the path for bishop*********************/
    // e.target.classList.add("yellow");
    let storage = {};
    storage[dataIndex] = true;

    console.log("35", storage);
    findBishopPath(cRi, cCi, storage);
    //or the below four path
    // findTopLeft(cRi, cCi, storage);
    // findTopRight(cRi, cCi, storage);
    // findBottomLeft(cRi, cCi, storage);
    // findBottomRight(cRi, cCi, storage);
    /************************************************/
    // console.log("40", storage);
    // color wherever dataIndex matches;
    for (let i = 0; i < boxesArr.length; i++) {
      let cDataIndex = boxesArr[i].dataset.index;
      if (storage[cDataIndex] == true) {
        // color it
        boxesArr[i].classList.add("yellow");
      }
    }
  });
  function findBishopPath(cRi, cCi, storage) {
    console.log("came here", cRi, cCi);
    let directionArr = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];
    for (let i = 0; i < directionArr.length; i++) {
      let r = directionArr[i][0];
      let c = directionArr[i][1];
      let row = parseInt(cRi);
      let col = parseInt(cCi);
      console.log("r ", r + row, "c", c + col);
      while (r + row >= 0 && r + row < 8 && c + col >= 0 && c + col < 8) {
        //console.log("came inside while loop ", r + row, c + col);
        row = r + row;
        col = c + col;
        let dataIndex1 = `${row}-${col}`;
        //console.log("dataIndex1 is ", dataIndex1);
        storage[dataIndex1] = true;
      }
    }
  }

  table.addEventListener("mouseleave", function () {
    // console.log("leave");
    for (let i = 0; i < boxesArr.length; i++) {
      boxesArr[i].classList.remove("yellow");
    }
  });

  function findTopLeft(cRi, cCi, storage) {
    cRi--;
    cCi--;
    while (cRi >= 0 && cCi >= 0) {
      let dataIndex = `${cRi}-${cCi}`;
      storage[dataIndex] = true;
      cRi--;
      cCi--;
    }
  }

  function findTopRight(cRi, cCi, storage) {
    cRi--;
    cCi++;
    while (cRi >= 0 && cCi <= 7) {
      let dataIndex = `${cRi}-${cCi}`;
      storage[dataIndex] = true;
      cRi--;
      cCi++;
    }
  }

  function findBottomLeft(cRi, cCi, storage) {
    cRi++;
    cCi--;
    while (cRi <= 7 && cCi >= 0) {
      let dataIndex = `${cRi}-${cCi}`;
      storage[dataIndex] = true;
      cRi++;
      cCi--;
    }
  }
  function findBottomRight(cRi, cCi, storage) {
    cRi++;
    cCi++;
    while (cRi <= 7 && cCi <= 7) {
      let dataIndex = `${cRi}-${cCi}`;
      storage[dataIndex] = true;
      cRi++;
      cCi++;
    }
  }
});
