import React from "react";
import PropTypes from "prop-types";
const Filter = ({ filter, onChange }) => {
    return (
        <input
            type="text"
            id="filter"
            placeholder="поиск..."
            value={filter}
            className="form-control"
            aria-label="Text input with dropdown button"
            onChange={onChange}
        />
    );
};

Filter.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.string
};

export default Filter;
