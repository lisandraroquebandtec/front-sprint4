import { FiltersItemContainer,FiltersLabel, FilterImg} from "./StyleFilterItem";
import filter from "../../../../assets/images/filter.svg";
function FilterItem(props) {
  return (
    <FiltersItemContainer>
      <FiltersLabel>{props.filters}</FiltersLabel>
      <FilterImg src={filter}/>
    </FiltersItemContainer>
  );
} 
export default FilterItem;

