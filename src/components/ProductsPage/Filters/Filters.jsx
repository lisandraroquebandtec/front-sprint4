import { FiltersContainer, FiltersList } from "./StyleFilters";
import { useContext } from "react";
import FilterContext from "../../../contexts/FilterContext";
import FilterItem from "./FilterItem/FilterItem";

function Filters() {
  const filters = useContext(FilterContext);
  return (
    <FiltersContainer>
      <FiltersList>
      {filters &&
            filters.filters.length > 0 &&
            filters.filters.map((filter) => (
        <FilterItem
        filters={filter.label}
        key={filter.id}
      />
    ))}
      </FiltersList>
    </FiltersContainer>
  );
}

export default Filters;
