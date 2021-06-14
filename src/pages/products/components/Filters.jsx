import { useContext, useEffect, useState } from "react";
import LoadingContext from "../../../contexts/LoadingContext";
import MessageContext from "../../../contexts/MessageContext";
import FiltersService from "../../../services/FiltersService";

function FilterItem({ label }) {
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
    useEffect(() => loadFilters(), []);

    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    function loadFilters() {
        addRequest();
        FiltersService.get()
            .then(f => setFilters(f))
            .catch(() => setMessage("Ocorreu um erro ao carregar os filtros..."))
            .finally(() => removeRequest());
    }

    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters.map(f => <FilterItem key={f.id} label={f.label} />)}
            </ul>
        </section>
    );
}

export default Filters;