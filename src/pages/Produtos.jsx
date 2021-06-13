import { useEffect, useState } from "react";
import ProdutosService from "../services/ProdutosService";
import FiltersService from "../services/FiltersService";
import BreadcrumbsService from "../services/BreadcrumbsService";

function Breadcrumb({ id, link, descricao }) {
    return (
        <li className="breadcrumbs__item">
            { link ?
                <>
                    <a className="breadcrumbs__link" href={link}>{descricao}</a>
                    <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
                </>
                :
                <span className="breadcrumbs__link">{descricao}</span>
            }
        </li>
    );
}

function Breadcrumbs() {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    // eslint-disable-next-line
    useEffect(() => carregarBreadcrumbs(), []);

    function carregarBreadcrumbs() {
        // setCarregando(true);
        BreadcrumbsService.listar()
            .then(b => setBreadcrumbs(b))
            .finally(
                // () => setCarregando(false)
            );
    }

    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    {breadcrumbs.map(b => <Breadcrumb key={b.id} link={b.link} descricao={b.descricao} />)}
                </ol>
            </nav>
        </section>
    )
}

function Filter({ label }) {
    return (
        <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src="assets/filter.svg" alt="filtro" />
        </li>
    );
}

function Filters() {
    const [filters, setFilters] = useState([]);

    // eslint-disable-next-line
    useEffect(() => carregarFilters(), []);

    function carregarFilters() {
        // setCarregando(true);
        FiltersService.listar()
            .then(f => setFilters(f))
            .finally(
                // () => setCarregando(false)
            );
    }

    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters.map(f => <Filter key={f.id} label={f.label} />)}
            </ul>
        </section>
    );
}

function Produto({ imagem, descricao, valor }) {
    return (
        <li className="products__card card">
            <div className="card">
                <img className="card__img" src={imagem} alt="" />
                <p className="card__description">
                    {descricao}
                </p>
                <p className="card__price">
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
        <main className="main">
            <Breadcrumbs></Breadcrumbs>

            <Filters></Filters>

            <section className="main__products products">
                <div className="products__row">
                    <ol className="products__list">
                        {produtos
                            .map(
                                p =>
                                    <Produto key={p.id} imagem={p.imagem} descricao={p.descricao} valor={p.valor} />
                            )
                        }
                    </ol>
                </div>
                <div className="products__row">
                    <ol className="products__list">
                    </ol>
                </div>
            </section>
        </main>
    );
}

export default Produtos;