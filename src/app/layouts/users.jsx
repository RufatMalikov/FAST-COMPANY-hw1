import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage/usersListPage";

const Users = () => {
    const params = useParams();

    const { userId } = params;

    return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>;
};

Users.propTypes = {
    match: PropTypes.object
};
export default Users;
