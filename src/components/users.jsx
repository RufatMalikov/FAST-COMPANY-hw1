import React, { useState } from "react";
import api from "../api";
const Users = () => {
  //console.log(api.users.fetchAll());
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) =>
      prevState.filter((element) => element._id !== userId)
    );
  };
  let countOfpeople = users.length;
  const renderPhrase = (number) => {
    return number === 2 || number === 3 || number === 4
      ? `${number} человека тусанёт с тобой сегодня`
      : number === 0
      ? "никто не тусанет с тобой сегодня"
      : `${number} человек тусанёт с тобой сегодня`;
  };
  let classePhrase = "badge ";
  classePhrase += countOfpeople === 0 ? "bg-danger" : "bg-primary";
  const renderHeaderOftable = () => {
    if (countOfpeople !== 0) {
      return (
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качество</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился,раз</th>
          <th scope="col">Оценка</th>
          <th></th>
        </tr>
      );
    }
  };

  const usersOntable = users.map((element) => {
    return (
      <tr key={element._id} id={element._id}>
        <th scope="row">{element.name}</th>
        <td>
          {element.qualities.map((item) => {
            let classes = `badge bg-${item.color} m-2`;
            return (
              <span key={item._id} className={classes}>
                {item.name}
              </span>
            );
          })}
        </td>
        <td>{element.profession.name}</td>
        <td>{element.completedMeetings}</td>
        <td>{element.rate}/5</td>
        <td>
          <button
            className="btn btn-danger m-2"
            onClick={() => handleDelete(element._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <>
        <h2>
          <span className={classePhrase}>{renderPhrase(countOfpeople)}</span>
        </h2>
        <table className="table">
          <thead>{renderHeaderOftable()}</thead>
          <tbody>{usersOntable}</tbody>
        </table>
      </>
    </>
  );
};

export default Users;
