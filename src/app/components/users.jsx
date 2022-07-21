import React from "react";
import api from "../api";

import User from "./user";

const Users = ({ users, handleDelete, handleToogleBookMark }) => {
  //console.log(users[0]._id);
  return users.map((element) => {
    return (
      <User
        element={element}
        handleDelete={handleDelete}
        handleToogleBookMark={handleToogleBookMark}
        key={element._id}
      />
    );
  });
};

export default Users;

// users.map((user) => (
//   <tr key={user._id}>
//     <td>{user.name}</td>
//     <td>
//       {users.map((element) => {
//         return element.qualities;
//       })}
//     </td>
//     <td>{user.profession.name}</td>
//     <td>{user.completedMeetings}</td>
//     <td>{user.rate} /5</td>
//     <td>
//       <button
//         onClick={() => handleDelete(user._id)}
//         className="btn btn-danger"
//       >
//         delete
//       </button>
//     </td>
//   </tr>
// ));

// import React, { useState } from "react";
// import api from "../api";
// import SearchStatus from "./searchStatus";
// const Users = () => {
//   const [users, setUsers] = useState(api.users.fetchAll());
//   console.log(users);
//   const handleDelete = (userId) => {
//     setUsers(users.filter((user) => user._id !== userId));
//   };

//   return (
//     <>
//       <h2>
//         <span
//           className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
//         >
//           {users.length > 0
//             ? `${
//                 users.length + " " + SearchStatus(users.length)
//               } с тобой сегодня`
//             : "Никто с тобой не тусанет"}
//         </span>
//       </h2>

//       {users.length > 0 && (
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Имя</th>
//               <th scope="col">Качества</th>
//               <th scope="col">Профессия</th>
//               <th scope="col">Встретился, раз</th>
//               <th scope="col">Оценка</th>
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>
//                   {user.qualities.map((item) => (
//                     <span
//                       className={"badge m-1 bg-" + item.color}
//                       key={item._id}
//                     >
//                       {item.name}
//                     </span>
//                   ))}
//                 </td>
//                 <td>{user.profession.name}</td>
//                 <td>{user.completedMeetings}</td>
//                 <td>{user.rate} /5</td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user._id)}
//                     className="btn btn-danger"
//                   >
//                     delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// };

// export default Users;
