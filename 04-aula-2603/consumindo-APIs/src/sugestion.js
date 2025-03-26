export function setupSugestion(button) {
  const getRandomActivity = async () => {
    const proxy = "https://api.allorigins.win/get?url=";
    const category = document.getElementById("sugestion-categories").value;

    if (!category) {
      alert("You need to select a category!");
      return;
    }

    try {
      const response = await fetch(
        proxy + `https://bored-api.appbrewery.com/filter?type=${category}`
      );

      if (!response.ok) {
        alert("Unknown error. Try again later.")
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();
      const parsedData = JSON.parse(data.contents); // Converte a string JSON em um objeto
      const selectedActivity =
        parsedData[Math.floor(Math.random() * parsedData.length)];
      console.log(parsedData);
      console.log(selectedActivity);

      document.getElementById("sugestion-lbl").textContent = "You should:";
      document.getElementById("sugestion-name").textContent =
        selectedActivity.activity;
    } catch (error) {
      console.error("Erro ao buscar atividade:", error);
      return null;
    }
  };

  button.addEventListener("click", () => getRandomActivity());
}
