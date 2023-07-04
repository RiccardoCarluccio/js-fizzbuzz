const fizzBuzzContainer = document.querySelector(".fizzbuzz-container");

for (let i = 0; i < 100; i++) {
  let singleCell = document.createElement("div");

  if (i % 3 === 0 && i % 5 === 0) {
    singleCell.classList.add("mandy-red");
  } else if (i % 3 === 0) {
    singleCell.classList.add("caribbean-green");
  } else if (i % 5 === 0) {   //buzz
    singleCell.classList.add("light-mustard-yellow");
  } else {  //number
    singleCell.classList.add("nice-blue")
    singleCell.innerHTML = i.toString();
  }

  fizzBuzzContainer.append(singleCell);
}