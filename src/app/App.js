import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import Pagination from "./components/pagination";
import api from "./api";
import { paginate } from "./utils/paginate";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const count = users.length; // add
    const pageSize = 4; // add
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        // console.log("page", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    // console.log(userCrop);
    const handleDelete = (userId) => {
        return setUsers((prevState) =>
            prevState.filter((element) => element._id !== userId)
        );
    };
    const handleToogleBookMark = (id) => {
        const bookmarkValue = users.find((item) => item._id === id);
        bookmarkValue.bookmark = true;
        const newUsers = [...users];
        setUsers(newUsers);
    };
    return (
        <>
            <h2>
                <span
                    className={
                        "badge " +
                        (users.length > 0 ? "bg-primary" : "bg-danger")
                    }
                >
                    {users.length > 0
                        ? `${
                              users.length + "" + SearchStatus(users.length)
                          } с тобой сегодня`
                        : "Никто с тобой не тусанет"}
                </span>
            </h2>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <Users
                            users={users}
                            onDelete={handleDelete}
                            onToogleBookMark={handleToogleBookMark}
                            userCrop={userCrop}
                        />
                    </tbody>
                </table>
            )}

            <Pagination
                itemsCount={count}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </>
    );
}

export default App;
