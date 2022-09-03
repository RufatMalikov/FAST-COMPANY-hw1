import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import UserPage from "../components/userPage";
import UsersList from "../components/usersList";
import api from "../api";

const Users = () => {
    const params = useParams();
    const [users, setUsers] = useState();
    const [professions, setProfesions] = useState();
    const [user, setUser] = useState();
    const { userId } = params;

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
        api.professions.fetchAll().then((data) => setProfesions(data));
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return (
        <>
            {userId ? (
                <UserPage user={user} />
            ) : (
                <UsersList
                    users={users}
                    setUsers={setUsers}
                    professions={professions}
                />
            )}
        </>
    );
};

Users.propTypes = {
    match: PropTypes.object
};
export default Users;
