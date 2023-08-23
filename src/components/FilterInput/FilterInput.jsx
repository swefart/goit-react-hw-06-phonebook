import { Input } from "./FilterInput.styled";
import PropTypes from 'prop-types';
import { filterContact } from "Store/contactsSlice";
import { useDispatch } from "react-redux";

const FilterInput = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <span >{"Find contact by name"}</span>
            <Input type="text" name="filter" onChange={e => (dispatch(filterContact(e.target.value)))}></Input>
        </div>
        
    )
}

export default FilterInput

FilterInput.propTypes = {
    onChange: PropTypes.func,
}