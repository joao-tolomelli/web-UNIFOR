document.addEventListener("DOMContentLoaded", () => {
  loadGames();
});

function addGame() {
  let gameText = document.getElementById("gameInput").value.trim();
  let gameStartDate = document.getElementById("gameStartDate").value;

  if (gameText === "") {
    alert("Digite um jogo válido!");
    return;
  }
  if (gameStartDate === "") {
    alert("Digite uma data válida!");
    return;
  }

  let gameList = document.getElementById("gameList");
  let item = document.createElement("li");
  item.classList.add("game-container"); 

  item.innerHTML = `
    <div class="text-area">
      <span class="gameName" onclick="toggleGame(this)">Nome: ${gameText}</span>
      <span class="gameStartDate">Início: ${gameStartDate}</span>
    </div>
    <button class="delete-btn" onclick="deleteGame(this)">X</button>
  `;
  
  gameList.appendChild(item);
  saveGame(); 
  document.getElementById("gameInput").value = "";
  document.getElementById("gameStartDate").value = ""; 
}

function toggleGame(element) {
  element.parentElement.parentElement.classList.toggle("completed");
  console.log(element.parentElement.parentElement)
  saveGame(); 
}

function deleteGame(element) {
  element.parentElement.remove();
  saveGame(); 
}

function saveGame() {
  let games = [];
  document.querySelectorAll("#gameList .game-container").forEach((element) => {
    let gameName = element.querySelector(".gameName").innerText.replace("Nome: ", "").trim();
    let gameStartDate = element.querySelector(".gameStartDate").innerText.replace("Início: ", "").trim();
    let status = element.classList.contains("completed");

    games.push({
      game: gameName,
      startDate: gameStartDate,
      status: status,
    });
  });

  localStorage.setItem("games", JSON.stringify(games));
}

function loadGames() {
  let games = JSON.parse(localStorage.getItem("games")) || [];

  let gameList = document.getElementById("gameList");

  games.forEach((element) => {
    let item = document.createElement("li");
    item.classList.add("game-container");

    item.innerHTML = `
      <div class="text-area">
        <span class="gameName" onclick="toggleGame(this)">Nome: ${element.game}</span>
        <span class="gameStartDate">Início: ${element.startDate}</span>
      </div>
      <button class="delete-btn" onclick="deleteGame(this)">X</button>
    `;

    if (element.status) {
      item.classList.add("completed");
    }

    gameList.appendChild(item);
  });
}
