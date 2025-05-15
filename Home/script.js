loadExperiences();
function addExperience() {
  const input = document.getElementById("newExperience");
  const text = input.value.trim(); 
  
  if (text) { 
    const list = JSON.parse(localStorage.getItem("experiences")) || [];
    list.push(text);
    localStorage.setItem("experiences", JSON.stringify(list));
    input.value = "";
    loadExperiences();
  }
}

function deleteExperience(index) {
  const list = JSON.parse(localStorage.getItem("experiences")) || [];
  
  list.splice(index, 1);
  localStorage.setItem("experiences", JSON.stringify(list));
  loadExperiences();
}
function loadExperiences() 
{
  const list = JSON.parse(localStorage.getItem("experiences")) || [];
  const ul = document.getElementById("experienceList");
  ul.innerHTML = "";
  list.forEach((item, index) => 
  {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `${item} <button onclick="deleteExperience(${index})">Delete</button>`;
    ul.appendChild(li);
  });
}