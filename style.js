// Seleciona os elementos do DOM
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tarefas = [];



// Adiciona uma nova tarefa
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto !== "") {
        tarefas.push(texto);
        input.value = "";
        salvarETornarVisivel();
    }
});

