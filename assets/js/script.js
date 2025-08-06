const loadHTML = (id, file) => {
  console.log(`${file}: Carregado com sucesso! ${id}`);
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
};
document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadHTML("links-internos", "components/includes/links-internos.html"),
    loadHTML("links-externos", "components/includes/links-externos.html"),
    loadHTML("cabecalho", "components/cabecalho.html"),
    loadHTML("saudacao-inicial", "components/saudacao-inicial.html"),
    loadHTML("rotina", "components/rotina.html"),
    loadHTML("rodape", "components/rodape.html"),
  ])
    .then(() => {
      console.log("Todos os componentes carregados com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao carregar os componentes:", error);
    });
});
