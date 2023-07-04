const fizzBuzzContainer = document.querySelector(".fizzbuzz-container");

for (let i = 1; i <= 100; i++) {
  let singleCell = document.createElement("div");


  if (i % 3 === 0 && i % 5 === 0) {   //fizz buzz
    singleCell.classList.add("single-cell", "mandy-red");
    let dragonCell = document.createElement("i");
    dragonCell.classList.add("fa-solid", "fa-dragon", "fs-3");
    singleCell.append(dragonCell);
  } else if (i % 3 === 0) {   //fizz
    singleCell.classList.add("single-cell", "caribbean-green", "fs-5", "fw-bold");
    singleCell.innerHTML = 'FIZZ';
  } else if (i % 5 === 0) {   //buzz
    singleCell.classList.add("single-cell", "light-mustard-yellow", "fs-5", "fw-bold");
    singleCell.innerHTML = 'BUZZ';
  } else {  //number
    singleCell.classList.add("single-cell", "nice-blue", "fs-5", "fw-bold")
    singleCell.innerHTML = i.toString();
  }

  fizzBuzzContainer.append(singleCell);


//con la partecipazione dei miei padri: Gabriele Pazi, Pietro Leone, Valerio Collura
//e la supervione di mio padre di Mazzara
  const prideStillGoing = document.getElementById('pride-still-going');

  if (i === 18) {
    singleCell.addEventListener('mouseover', function colluraGaming() {
      singleCell.innerHTML= 'Mio Padre Valerio';
      prideStillGoing.classList.replace('elephant-blue', 'ymca');
    })
    singleCell.addEventListener('mouseleave', function colluraGaming() {
      singleCell.innerHTML= 'FIZZ';
      prideStillGoing.classList.replace('ymca', 'elephant-blue');
    })
  }
}