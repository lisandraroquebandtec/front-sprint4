import { useEffect, useState } from "react";
import FiltersService from "../../../services/FiltersService";

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

export default Filters;