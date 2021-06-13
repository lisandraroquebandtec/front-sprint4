const MenuService = {
    obter() {
        // const url = '/data/menu.json';
        const url = 'https://5c056c28-5883-405c-9f30-3cd52ce03567.mock.pstmn.io/menu';
        return fetch(url)
            .then(m => m.json());
    },
};

export default MenuService;