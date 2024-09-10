function search() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("results-search");

  let searchField = document.getElementById("input-search").value

  // se o searchField for uma string sem nada
  if (!searchField) {
    section.innerHTML = "<p>Não foi encontrado. Você precisa digitar o nome de um atleta ou esporte...</p>"
    return
  }

  searchField = searchField.toLowerCase()

  // Inicializa a string que armazenará os resultados
  let results = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada atleta no array `athletes`
  for (let data of athletes) {
    titulo = data.titulo.toLocaleLowerCase()
    descricao = data.descricao.toLocaleLowerCase()
    tags = data.tags.toLocaleLowerCase()
    
    //se titulo includes searchField
    if (titulo.includes(searchField) || descricao.includes(searchField) || tags.includes(searchField)) {
      // cria um novo elemento
      results += `
      <div class="result-item">
          <h2>
            <a href="#" target="_blank">${data.titulo}</a>
          </h2>
          <p class="descrition-athlete">${data.descricao}</p>
          <a href=${data.link}>Mais informações</a>
        </div>
    `;
    }
  }

  if (!results){
    results = "<p>Nada foi encontrado</p>"
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = results;
}

