var allSelector = {
  image: document.querySelector(".client-img img"),
  name: document.querySelector(".name"),
  title: document.querySelector(".title"),
  review: document.querySelector(".review p"),
  prev: document.querySelector(".prev"),
  next: document.querySelector(".next"),
  random: document.querySelector(".random-btn")
}

var images = [
  "./assets/images/susan-smith.jpeg",
  "./assets/images/israel-oliveira.jpg",
  "./assets/images/bruno-salvadori.jpg",
  "./assets/images/andrea-piacquadio.jpg"
];

var names = [
  "Susan Smith",
  "Israel Oliveira",
  "Bruno Salvadori",
  "Andrea Piacquadio"
];

var titles = [
  "WEB DEVELOPER",
  "PHOTOGRAPHER",
  "ARTIST",
  "JUDGE"
];

var reviews = [
  "I'm baby meggings twee heath goth +1. Bicycle rights tumeric charetreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  "Bicycle rights tumeric charetreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  "I'm baby meggings twee heath goth +1. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  "tumeric charetreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie."
];

var update = 0;

// next button event
allSelector.next.addEventListener("click", function () {
  if (update >= names.length - 1) {
    update = 0;
  } else {
    update++;
  }

  allSelector.image.src = images[update];
  allSelector.name.innerText = names[update];
  allSelector.title.innerText = titles[update];
  allSelector.review.innerText = reviews[update];
});

// prev button event
allSelector.prev.addEventListener("click", function () {
  if (update <= 0) {
    update = names.length - 1;
  } else {
    update--;
  }

  allSelector.image.src = images[update];
  allSelector.name.innerText = names[update];
  allSelector.title.innerText = titles[update];
  allSelector.review.innerText = reviews[update];
});

allSelector.random.addEventListener("click", function () {
  update = Math.floor(Math.random() * names.length);

  allSelector.image.src = images[update];
  allSelector.name.innerText = names[update];
  allSelector.title.innerText = titles[update];
  allSelector.review.innerText = reviews[update];
});