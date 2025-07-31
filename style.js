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

// Renderiza as tarefas na tela
function renderizarTarefas() {
    list.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const botao = document.createElement("button");
        botao.textContent = "Excluir";
        botao.onclick = () => {
            tarefas.splice(index, 1);
            salvarETornarVisivel();
        };

        li.appendChild(botao);
        list.appendChild(li);
    });
}
