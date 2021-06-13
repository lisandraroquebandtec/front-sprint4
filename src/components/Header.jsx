function Header() {
    return (
        <header class="header">
            <div class="header__container">
                <div class="header__mobile">
                    <div class="header__drawer menu header__drawer--active">
                        <img class="menu__img" src="assets/menu.svg" alt="menu" />
                        <p class="menu__title">menu</p>
                    </div>
                    <div class="header__drawer close">
                        <img src="assets/close.svg" alt="fechar menu" />
                        <p class="close__title">fechar</p>
                    </div>
                    <h1 class="header__logo">
                        <img class="header__img" src="assets/rchlo.svg" alt="Logo" />
                    </h1>
                </div>
                <div class="header__desktop">
                    <h1 class="header__logo">
                        <img class="header__img" src="assets/riachuelo.svg" alt="Logo" />
                    </h1>
                </div>
                <div class="header__search">
                    <img class="header__icon" src="assets/search.svg" alt="lupa" />
                    <input class="header__input" type="search" placeholder="O que você está procurando?"
                        oninput="produtoController.filtra(event)" />
                </div>

                <nav class="header__menu menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <a class="menu__link" href="#home">
                                <span>Novidades</span>
                            </a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Feminino</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Masculino</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Infantil</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Moda Íntima</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Calçados</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Acessórios e Relógios</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Beleza e Perfume</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Casa Riachuelo</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Eletrônicos</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Personagens</a>
                        </li>
                        <li class="menu__item">
                            <a class="menu__link" href="#home">Outlet</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;