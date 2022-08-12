import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import UserPage from "./userPage";
import UsersList from "./usersList";
import api from "../api";

const Users = () => {
    const params = useParams();
    const [users, setUsers] = useState();
    const [professions, setProfesions] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data)),
            api.professions.fetchAll().then((data) => setProfesions(data));
    }, []);

    const { userId } = params;
    return (
        <>
            {userId ? (
                <UserPage id={userId} users={users} />
            ) : (
                <UsersList
                    id={userId}
                    users={users}
                    setUsers={setUsers}
                    professions={professions}
                    setProfesions={setProfesions}
                />
            )}
        </>
    );
};

Users.propTypes = {
    match: PropTypes.object
};
export default Users;
