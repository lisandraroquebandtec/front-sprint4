import { useEffect, useState } from "react";

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

    function carregarMenu() {
        // setCarregando(true);
        MenuService.obter()
            .then(menu => setMenu(menu))
            .finally(
                // () => setCarregando(false)
            );
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