function carregarPagina(pagina) {
    localStorage.removeItem("taskId")
    const conteudoPrincipal = document.getElementById('conteudoPrincipal')

    const url = `${pagina}.html`
    const script = `../JS/${pagina}.js`

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao carregar a página ${pagina}: ${response.statusText}`);
        }
        return response.text();
    })
        .then(html => {
            conteudoPrincipal.innerHTML = html;
            const scriptNovo = document.createElement('script')
            scriptNovo.src = `../JS/${script}`;
            document.body.appendChild(scriptNovo)
        })
}

localStorage.setItem("ipApi","http://10.0.3.253:3000/")