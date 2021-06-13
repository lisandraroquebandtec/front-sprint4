const FiltersService = {
    listar() {
        // const url = '/data/filters.json';
        const url = 'https://5c056c28-5883-405c-9f30-3cd52ce03567.mock.pstmn.io/filters';
        return fetch(url)
            .then(f => f.json());
    },
};

export default FiltersService;