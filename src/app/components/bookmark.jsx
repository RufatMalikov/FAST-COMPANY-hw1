import React from "react";

const Bookmark = ({ handleToogleBookMark, id, bookmark }) => {
  const renderIcon = () => {
    return bookmark === false ? (
      <i className="bi bi-bookmark"></i>
    ) : (
      <i className="bi bi-bookmark-heart-fill"></i>
    );
  };
  return (
    <button onClick={() => handleToogleBookMark(id)}>{renderIcon()}</button>
  );
};

export default Bookmark;
