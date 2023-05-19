// console.log("Hello from JS");
// console.log(list);
const list = document.getElementById("muscle-list");
fetch("http://localhost:3000/muscles")
  .then((response) => response.json())
  .then((data) => {
    console.dir(data);
    data.forEach((muscle) => {
      const muscleCard = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${muscle.name}</h5>
          <p class="card-text">See all the possible exercises.</p>
          <a href="#" class="btn btn-primary">Explore ${muscle.name}</a>
        </div>
      </div>
      `;
      list.insertAdjacentHTML("beforeend", muscleCard);
    });
  });
