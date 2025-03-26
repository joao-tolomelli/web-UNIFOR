import "./style.css";
import { setupSugestion } from "./sugestion.js";

document.querySelector("#app").innerHTML = /*html*/ `
  <div>
    <h1>What should I do?</h1>
    <div>
      <select id="sugestion-categories" name="categories">
        <option value="" disabled selected>Select a category</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="busywork">Busywork</option>
      </select>
    </div>
    <div class="card">
      <button id="sugestion-btn" type="button">get sugestion</button>
    </div>
    <div id="sugestion-card">
      <p id="sugestion-lbl">You haven't created a suggestion yet.</p>
      <p id="sugestion-name"> </p>
    </div>
  </div>
`;

setupSugestion(document.querySelector("#sugestion-btn"));
