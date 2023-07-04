const fizzBuzzContainer = document.querySelector(".fizzbuzz-container");

for (let i = 1; i <= 100; i++) {
  let singleCell = document.createElement("div");

  if (i % 3 === 0 && i % 5 === 0) {   //fizz buzz
    singleCell.classList.add("single-cell", "mandy-red");
    //singleCell.innerHTML = 'FIZZ BUZZ';
    let dragonCell = document.createElement("i");
    dragonCell.classList.add("fa-solid", "fa-dragon", "fs-3");
    singleCell.append(dragonCell);
  } else if (i % 3 === 0) {   //fizz
    singleCell.classList.add("single-cell", "caribbean-green");
    singleCell.innerHTML = 'FIZZ';
  } else if (i % 5 === 0) {   //buzz
    singleCell.classList.add("single-cell", "light-mustard-yellow");
    singleCell.innerHTML = 'BUZZ';
  } else {  //number
    singleCell.classList.add("single-cell", "nice-blue")
    singleCell.innerHTML = i.toString();
  }

  fizzBuzzContainer.append(singleCell);
}