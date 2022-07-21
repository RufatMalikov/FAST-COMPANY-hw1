import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
const User = ({ element, handleDelete, handleToogleBookMark }) => {
  //console.log(users);
  return (
    <tr key={element._id}>
      <td>{element.name}</td>
      <td>
        {element.qualities.map((item) => {
          return <Qualitie item={item} key={item._id} />;
        })}
      </td>
      <td>{element.profession.name}</td>
      <td>{element.completedMeetings}</td>
      <td>{element.rate}/5</td>
      <td>
        <Bookmark
          handleToogleBookMark={handleToogleBookMark}
          id={element._id}
          bookmark={element.bookmark}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(element._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
