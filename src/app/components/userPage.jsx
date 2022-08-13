import React from "react";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ user, id }) => {
    const history = useHistory();
    
    
        
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
    
};
UserPage.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object,
};
export default UserPage;
