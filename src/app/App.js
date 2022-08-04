import React, { useState, useEffect } from "react";
import Users from "./components/users";

import api from "./api";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        return setUsers((prevState) =>
            prevState.filter((element) => element._id !== userId)
        );
    };
    const handleToogleBookMark = (id) => {
        const bookmarkValue = users.find((item) => item._id === id);
        if (!bookmarkValue.bookmark) {
            bookmarkValue.bookmark = true;
        } else {
            bookmarkValue.bookmark = false;
        }
        const newUsers = [...users];
        setUsers(newUsers);
    };

    return (
        <div>
            <Users
                users={users}
                onDelete={handleDelete}
                onToogleBookMark={handleToogleBookMark}
            />
        </div>
    );
}

export default App;
