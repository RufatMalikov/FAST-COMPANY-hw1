import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Qualities from "../../ui/qualities";

import api from "../../../api";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    const data = JSON.parse(localStorage.getItem("data"));
    useEffect(() => {
        api.users.update(userId, data).then((data) => setUser(data));
    }, []);

    const handleEditUser = () => {
        if (user) {
            history.push(`/users/${user._id}/edit`);
        }
    };

    if (user) {
        return (
            <>
                <h1> {user.name}</h1>
                <h2> {`Профессия: ${user.profession.name}`}</h2>
                {<Qualities qualities={user.qualities} />}
                <p>{`completedMeetings: ${user.completedMeetings}`}</p>
                <h2> {`Rate: ${user.rate}`}</h2>
                <button
                    onClick={() => {
                        handleEditUser();
                    }}
                >
                    Изменить
                </button>
            </>
        );
    }
    return "ЗАГРУЗКА...";
};
UserPage.propTypes = {
    user: PropTypes.object,
    userId: PropTypes.string
};
export default UserPage;
