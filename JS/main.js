const fizzBuzzContainer = document.querySelector(".fizzbuzz-container");

for (let i = 0; i < 100; i++) {
  let singleCell = document.createElement("div");

  if (i % 3 === 0 && i % 5 === 0) {
    singleCell.classList.add()
  } else if (i % 3 === 0) {
    //fizz
  } else if (i % 5 === 0) {
    //buzz
  } else {
    singleCell.innerHTML = i.toString();
  }

  fizzBuzzContainer.append(singleCell);
}