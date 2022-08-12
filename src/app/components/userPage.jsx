import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";
import api from "../api";
const UserPage = ({ users, id }) => {
    const history = useHistory();
    if (users) {
        // const [user, setUser] = useState();
        // useEffect(() => {
        //     api.users.getById().then((data) => setUser(data));
        // }, []);

        const getUserById = (id) => {
            return users.find((user) => user._id.toString() === id);
        };
        const user = getUserById(id);
        //console.log(user);
        const handleReturnUserList = () => {
            history.replace("/users");
        };
        if (user) {
            return (
                <>
                    <h1> {user.name}</h1>
                    <h2> {`Профессия: ${user.profession.name}`}</h2>
                    {<QualitiesList qualities={user.qualities} />}
                    <p>{`completedMeetings: ${user.completedMeetings}`}</p>
                    <h2> {`Rate: ${user.rate}`}</h2>
                    <button
                        onClick={() => {
                            handleReturnUserList();
                        }}
                    >
                        Все Пользователи
                    </button>
                </>
            );
        }
        return "ЗАГРУЗКА...";
    }
    return "ЗАГРУЗКА...";
};
UserPage.propTypes = {
    users: PropTypes.array,
    id: PropTypes.string.isRequired
};
export default UserPage;
