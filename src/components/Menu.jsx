import { useContext, useEffect, useState } from "react";
import LoadingContext from "../contexts/LoadingContext";
import MessageContext from "../contexts/MessageContext";

import MenuService from "../services/MenuService";

function MenuItem({ label }) {
    return (
        <li className="menu__item">
            <a className="menu__link" href="#home">
                <span>{label}</span>
            </a>
        </li>
    );
}

function Menu() {
    const [menu, setMenu] = useState([]);

    // eslint-disable-next-line
    useEffect(() => carregarMenu(), []);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    function carregarMenu() {
        addRequest();
        MenuService.obter()
            .then(menu => setMenu(menu))
            .catch(() => setMessage("Ocorreu um erro ao carregar o menu..."))
            .finally(() => removeRequest());
    }

    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                {menu.map(m => <MenuItem key={m.id} label={m.label} />)}
            </ul>
        </nav>
    );
}

export default Menu;