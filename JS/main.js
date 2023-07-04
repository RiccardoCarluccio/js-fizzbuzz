const fizzBuzzContainer = document.querySelector(".fizzbuzz-container");

for (let i = 1; i <= 100; i++) {
  let singleCell = document.createElement("div");

  if (i % 3 === 0 && i % 5 === 0) {   //fizz buzz
    singleCell.classList.add("single-cell", "mandy-red");
  } else if (i % 3 === 0) {   //fizz
    singleCell.classList.add("single-cell", "caribbean-green");
  } else if (i % 5 === 0) {   //buzz
    singleCell.classList.add("single-cell", "light-mustard-yellow");
  } else {  //number
    singleCell.classList.add("single-cell", "nice-blue")
    singleCell.innerHTML = i.toString();
  }

  fizzBuzzContainer.append(singleCell);
}