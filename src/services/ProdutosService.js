const ProdutosService = {
    listar() {
        return fetch('/data/produtos.json')
            .then(p => p.json());
    },
};

export default ProdutosService;