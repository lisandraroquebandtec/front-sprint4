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

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__mobile">
                    <div className="header__drawer menu header__drawer--active">
                        <img className="menu__img" src="assets/menu.svg" alt="menu" />
                        <p className="menu__title">menu</p>
                    </div>
                    <div className="header__drawer close">
                        <img src="assets/close.svg" alt="fechar menu" />
                        <p className="close__title">fechar</p>
                    </div>
                    <h1 className="header__logo">
                        <img className="header__img" src="assets/rchlo.svg" alt="Logo" />
                    </h1>
                </div>
                <div className="header__desktop">
                    <h1 className="header__logo">
                        <img className="header__img" src="assets/riachuelo.svg" alt="Logo" />
                    </h1>
                </div>
                <div className="header__search">
                    <img className="header__icon" src="assets/search.svg" alt="lupa" />
                    <input className="header__input" type="search" placeholder="O que você está procurando?" />
                </div>

                <Menu />
            </div>
        </header >
    );
}

export default Header;