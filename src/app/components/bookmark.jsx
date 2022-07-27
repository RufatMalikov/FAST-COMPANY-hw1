import React from "react";
import PropTypes from "prop-types";
const Bookmark = ({ onToogleBookMark, id, bookmark }) => {
    const renderIcon = () => {
        return bookmark === false ? (
            <i className="bi bi-bookmark"></i>
        ) : (
            <i className="bi bi-bookmark-heart-fill"></i>
        );
    };
    return <button onClick={() => onToogleBookMark(id)}>{renderIcon()}</button>;
};

Bookmark.propTypes = {
    onToogleBookMark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    bookmark: PropTypes.bool.isRequired
};
export default Bookmark;
