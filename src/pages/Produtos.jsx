import { useEffect, useState } from "react";
import ProdutosService from "../services/ProdutosService";


function Breadcrumb({ link, descricao }) {
    return (
        <li class="breadcrumbs__item">
            { link ?
                <>
                    <a class="breadcrumbs__link" href={link}>{descricao}</a>
                    <span class="breadcrumbs__item  breadcrumbs__separator">/</span>
                </>
                :
                <span class="breadcrumbs__link">{descricao}</span>
            }
        </li>
    );
}

function Breadcrumbs() {
    const breadcrumbs = [
        {
            link: "#home",
            descricao: "Home"
        },
        {
            link: "#home",
            descricao: "Infantil"
        },
        {
            link: "#home",
            descricao: "Personagens"
        },
        {
            descricao: "Mario Bros"
        }
    ];

    return (
        <section class="main__breadcrumbs breadcrumbs">
            <nav>
                <ol class="breadcrumbs__list">
                    {breadcrumbs.map(b => <Breadcrumb link={b.link} descricao={b.descricao} />)}
                </ol>
            </nav>
        </section>
    )
}

function Filters() {
    return (
        <section class="main__filters filters">
            <ul class="filters__list">
                <li class="filters__item">
                    <span class="filters__label">Tamanho</span>
                    <img class="filters__img" src="assets/filter.svg" alt="filtro tamanho" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Cor</span>
                    <img class="filters__img" src="assets/filter.svg" alt="filtro cor" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Departamento</span>
                    <img class="filters__img" src="assets/filter.svg" alt="filtro departamento" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Categoria</span>
                    <img class="filters__img" src="assets/filter.svg" alt="filtro categoria" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Manga</span>
                    <img class="filters__img" src="assets/filter.svg" alt="filtro manga" />
                </li>
            </ul>
        </section>
    );
}

function Produto({ imagem, descricao, valor }) {
    return (
        <li class="products__card card">
            <div class="card">
                <img class="card__img" src={imagem} alt="" />
                <p class="card__description">
                    {descricao}
                </p>
                <p class="card__price">
                    R$ {valor}
                </p>
            </div>
        </li>
    );
}

function Produtos() {

    const [produtos, setProdutos] = useState([]);

    // eslint-disable-next-line
    useEffect(() => carregarProdutos(), []);

    function carregarProdutos() {
        // setCarregando(true);
        ProdutosService.listar()
            .then(produtos => setProdutos(produtos))
            .finally(
                // () => setCarregando(false)
            );
    }

    return (
        <main class="main">
            <Breadcrumbs></Breadcrumbs>

            <Filters></Filters>

            <section class="main__products products">
                <div class="products__row">
                    <ol class="products__list">
                        {produtos
                            .map(
                                p =>
                                    <Produto imagem={p.imagem} descricao={p.descricao} valor={p.valor} />
                            )
                        }
                    </ol>
                </div>
                <div class="products__row">
                    <ol class="products__list">
                    </ol>
                </div>
            </section>
        </main>
    );
}

export default Produtos;